let app = undefined;

async function bootstrap() {
  if (!app) {
    const { createStrapi, compileStrapi } = require("@strapi/strapi");

    const appContext = await compileStrapi();
    const app = await createStrapi(appContext).load();

    app.server.mount();

    app.log.level = "error";
  }

  return app;
}

module.exports = {
  bootstrap,
};
