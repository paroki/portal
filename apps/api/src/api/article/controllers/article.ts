/**
 * article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::article.article",
  ({ strapi }) => ({
    async findOne(ctx) {
      let response = await super.findOne(ctx);

      if (!response) {
        const id = ctx.params.id;
        const entity = await strapi.db.query("api::article.article").findOne({
          where: {
            slug: id,
          },
        });
        if (entity) {
          ctx.params.id = entity.documentId;
          return await super.findOne(ctx);
        }
      }
      return response;
    },
  }),
);
