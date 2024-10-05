import fs from "fs-extra";
import path from "path";
import mime from "mime-types";

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
}

function getFileData(fileName) {
  const filePath = path.join("scripts", "fixtures", "img", fileName);
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

export async function uploadFile(fileName) {
  const name = fileName.split(".").shift();

  let fileWhereName = await strapi.query("plugin::upload.file").findOne({
    where: {
      name,
    },
  });

  if (!fileWhereName) {
    const data = getFileData(fileName);

    const uploaded = await strapi
      .plugin("upload")
      .service("upload")
      .upload({
        files: data,
        data: {
          fileInfo: {
            alternativeText: `An image uploaded to Strapi called ${name}`,
            caption: name,
            name,
          },
        },
      });
    fileWhereName = uploaded[0];
  }

  return fileWhereName;
}

async function createToken() {
  const fullname = "test-token";
  const tokenService = strapi.service("admin::api-token");

  const tokenExists = await tokenService.exists({
    name: fullname,
  });

  let xtoken = "";
  if (!tokenExists) {
    const { accessKey } = await tokenService.create({
      name: fullname,
      type: "full-access",
      lifespan: null,
    });
    xtoken = accessKey;
  } else {
    /// regenerate access token
    const exists = await tokenService.getByName(fullname);

    const { accessKey } = await tokenService.regenerate(exists.id);
    xtoken = accessKey;
  }

  return xtoken;
}

let token: string = null;
export async function generateToken() {
  if (!token) {
    // const token = "some-token";
    token = await createToken();
  }

  return token;
}

type Article = {
  title: string;
  [key: string]: number | string | object;
};
export async function findOrCreateArticle(payload: Article) {
  let item = await strapi.documents("api::article.article").findFirst({
    filters: {
      title: payload.title,
    },
  });

  if (!item) {
    item = await strapi.documents("api::article.article").create({
      data: {
        ...payload,
      },
    });
    await strapi.documents("api::article.article").publish({
      documentId: item.documentId,
    });
  }

  return item;
}

export async function createArticle(payload: Article) {
  const existing = await strapi.documents("api::article.article").findFirst({
    filters: {
      title: payload.title,
    },
  });

  if (existing) {
    await strapi.documents("api::article.article").delete({
      documentId: existing.documentId,
    });
  }

  const item = await strapi.documents("api::article.article").create({
    data: {
      ...payload,
    },
  });
  await strapi.documents("api::article.article").publish({
    documentId: item.documentId,
  });

  return item;
}
