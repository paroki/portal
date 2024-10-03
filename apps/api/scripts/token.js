"use strict";

const { bootstrap } = require("./bootstrap");

const FULL_NAME = "full-token";

async function createToken(full = false) {
  const tokenService = strapi.service("admin::api-token");

  const tokenExists = await tokenService.exists({
    name: FULL_NAME,
  });

  let token = "";
  if (!tokenExists) {
    const { accessKey } = await tokenService.create({
      name: FULL_NAME,
      type: "full-access",
      lifespan: null,
    });
    token = accessKey;
  } else {
    /// regenerate access token
    const exists = await tokenService.getByName(FULL_NAME);

    const { accessKey } = await tokenService.regenerate(exists.id);
    token = accessKey;
  }

  console.log(token);
}

async function main() {
  await bootstrap();

  let full = false;

  if (process.argv.length === 3 && process.argv[2] === "--full") {
    full = true;
  }

  await createToken(full);

  process.exit(0);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
