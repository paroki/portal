import Strapi, { createStrapi, type Core } from "@strapi/strapi";
import fs from "fs";

import strapiO from "@strapi/strapi";

let instance: Core.Strapi;

export async function setupStrapi() {
  if (!instance) {
    const appCtx = await strapiO.compileStrapi();
    await createStrapi({
      ...appCtx,
      autoReload: false,
      serveAdminPanel: false,
    }).load();

    instance = strapi;

    instance.server.mount();

    console.log(strapi.config.get("database.connection"));
  }
  return strapi;
}

export async function cleanupStrapi() {
  const dbSettings: any = strapi.config.get("database.connection");

  //close server to release the db-file
  strapi.server.httpServer.close();

  // close the connection to the database before deletion
  await strapi.db.connection.destroy();

  //delete test database after all tests have completed
  if (dbSettings && dbSettings.connection && dbSettings.connection.filename) {
    const tmpDbFile = dbSettings.connection.filename;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
    console.log(dbSettings.connection.filename);
  }

  await instance.destroy();
}
