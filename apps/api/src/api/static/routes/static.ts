/**
 * static router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::static.static", {
  config: {
    find: {
      middlewares: ["global::blog-populate"],
    },
    findOne: {
      middlewares: ["global::blog-populate"],
    },
  },
});
