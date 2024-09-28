/**
 * berita router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::berita.berita", {
  config: {
    find: {
      auth: false,
      middlewares: ["api::berita.blocks"],
    },
    findOne: {
      auth: false,
      middlewares: ["api::berita.blocks"],
    },
    create: {
      middlewares: ["api::berita.sync"],
    },
  },
});
