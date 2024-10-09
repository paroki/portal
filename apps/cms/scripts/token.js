"use strict";

const path = require("path");
const fs = require("fs-extra");
const { bootstrap } = require("./bootstrap");
const { encode } = require("querystring");

async function main() {
  // await bootstrap();

  let full = false;

  if (process.argv.length === 3 && process.argv[2] === "--full") {
    full = true;
  }

  await generateToken();

  process.exit(0);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
