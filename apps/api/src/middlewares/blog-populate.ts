/**
 * `blog-populate` middleware
 */

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const populate = ["blocks.image", "blocks.slider", "blocks.rich-text"];

    if (ctx.originalUrl.includes("articles")) {
      populate.push("category");
    }

    ctx.query.populate = populate;

    await next();
  };
};
