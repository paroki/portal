"use strict";

const fs = require("fs-extra");
const path = require("path");
const mime = require("mime-types");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const { kategories, statics, beritas } = require("../data/data.json");
const { fileURLToPath } = require("url");

const lipsum = new LoremIpsum({
  sentencesPerParagraph: {
    max: 20,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

async function isFirstRun() {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
}

async function seedData() {
  const shouldImportSeedData = await isFirstRun();

  if (shouldImportSeedData) {
    try {
      console.log("Setting up the template...");
      await importSeedData();
      console.log("Ready to go");
    } catch (error) {
      console.log("Could not import seed data");
      console.error(error);
    }
  } else {
    console.log(
      "Seed data has already been imported. We cannot reimport unless you clear your database first.",
    );
  }
}

async function setPublicPermissions(newPermissions) {
  // Find the ID of the public role
  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({
      where: {
        type: "public",
      },
    });

  // Create the new permissions and link them to the public role
  const allPermissionsToCreate = [];
  Object.keys(newPermissions).map((controller) => {
    const actions = newPermissions[controller];
    const permissionsToCreate = actions.map((action) => {
      return strapi.query("plugin::users-permissions.permission").create({
        data: {
          action: `api::${controller}.${controller}.${action}`,
          role: publicRole.id,
        },
      });
    });
    allPermissionsToCreate.push(...permissionsToCreate);
  });
  await Promise.all(allPermissionsToCreate);
}

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
}

function getFileData(fileName) {
  const filePath = path.join("data", "test", fileName);
  // Parse the file metadata
  const size = getFileSizeInBytes(filePath);
  const ext = fileName.split(".").pop();
  const mimeType = mime.lookup(ext || "") || "";

  return {
    filepath: filePath,
    originalFileName: fileName,
    size,
    mimetype: mimeType,
  };
}

async function uploadFile(file, name) {
  return strapi
    .plugin("upload")
    .service("upload")
    .upload({
      files: file,
      data: {
        fileInfo: {
          alternativeText: `An image uploaded to Strapi called ${name}`,
          caption: name,
          name,
        },
      },
    });
}

// Create an entry and attach files if there are any
async function createEntry({ model, entry }) {
  try {
    // Actually create the entry in Strapi
    await strapi.documents(`api::${model}.${model}`).create({
      data: entry,
    });
  } catch (error) {
    console.error({ model, entry, error });
  }
}

async function checkFileExistsBeforeUpload(files) {
  const existingFiles = [];
  const uploadedFiles = [];
  const filesCopy = [...files];

  for (const fileName of filesCopy) {
    // Check if the file already exists in Strapi
    const fileWhereName = await strapi.query("plugin::upload.file").findOne({
      where: {
        name: fileName.replace(/\..*$/, ""),
      },
    });

    if (fileWhereName) {
      // File exists, don't upload it
      existingFiles.push(fileWhereName);
    } else {
      // File doesn't exist, upload it
      const fileData = getFileData(fileName);
      const fileNameNoExtension = fileName.split(".").shift();
      const [file] = await uploadFile(fileData, fileNameNoExtension);
      uploadedFiles.push(file);
    }
  }
  const allFiles = [...existingFiles, ...uploadedFiles];
  // If only one file then return only that file
  return allFiles.length === 1 ? allFiles[0] : allFiles;
}

async function updateBlocks(blocks) {
  const updatedBlocks = [];
  for (const block of blocks) {
    if (block.__component === "shared.image") {
      const uploadedFiles = await checkFileExistsBeforeUpload([block.file]);
      // Copy the block to not mutate directly
      const blockCopy = { ...block };
      // Replace the file name on the block with the actual file
      blockCopy.file = uploadedFiles;
      updatedBlocks.push(blockCopy);
    } else if (block.__component === "shared.slider") {
      // Get files already uploaded to Strapi or upload new files
      const existingAndUploadedFiles = await checkFileExistsBeforeUpload(
        block.files,
      );
      // Copy the block to not mutate directly
      const blockCopy = { ...block };
      // Replace the file names on the block with the actual files
      blockCopy.files = existingAndUploadedFiles;
      // Push the updated block
      updatedBlocks.push(blockCopy);
    } else if (block.__component === "shared.rich-text-md") {
      const exp = block.body.split(".");
      if (exp[0] === "paragraphs") {
        const blockCopy = { ...block };
        blockCopy.body = lipsum.generateParagraphs(exp[1]);
        console.log(blockCopy);
        updatedBlocks.push(blockCopy);
      } else {
        updatedBlocks.push(block);
      }
    } else {
      // Just push the block as is
      updatedBlocks.push(block);
    }
  }

  return updatedBlocks;
}

async function importStatics() {
  for (const content of statics) {
    const updatedBlocks = await updateBlocks(content.blocks);

    await createEntry({
      model: "static",
      entry: {
        ...content,
        blocks: updatedBlocks,
        publishedAt: Date.now(),
      },
    });
  }
}

async function importKategories() {
  for (const kategori of kategories) {
    await createEntry({ model: "kategori", entry: kategori });
  }
}

async function importBeritas() {
  for (const berita of beritas) {
    const updatedBlocks = await updateBlocks(berita.blocks);

    await createEntry({
      model: "berita",
      entry: {
        ...berita,
        blocks: updatedBlocks,
        publishedAt: Date.now(),
      },
    });
  }
}

async function importSeedData() {
  await setPublicPermissions({
    kategori: ["find", "findOne"],
    static: ["find", "findOne"],
    berita: ["find", "findOne"],
  });

  await importKategories();
  await importStatics();
  await importBeritas();
}

async function cleanupTempDir() {
  const directory = process.cwd() + "/.tmp";
  fs.rmSync(directory, { recursive: true, force: true });
  fs.mkdirSync(directory);
}

async function main() {
  await cleanupTempDir();

  const { createStrapi, compileStrapi } = require("@strapi/strapi");

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = "error";

  // initAdmin(strapi);
  await seedData();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
