import type { Core } from "@strapi/strapi";

import _ from "lodash";
import { extractBlocks } from "./utils/blocks";

const applyTo = ["api::article.article"];

async function generateMetadata(ctx, next) {
  if (!["api::article.article"].includes(ctx.uid)) {
    return await next();
  }

  if (!["create", "update"].includes(ctx.action)) {
    return await next();
  }

  const { data } = ctx.params;

  data.metaTitle = data.title;
  if (!data.slug) {
    data.slug = _.kebabCase(data.title);
  }

  // returns if there are no blocks to process
  if (!data.blocks) {
    ctx.params.data = data;
    return await next();
  }

  const { thumbnail, description } = await extractBlocks(data.blocks);

  // generates description and metaDescription
  if (!data.description) {
    data.description = description;
  }
  data.metaDescription = data.description;

  // generates metaShareImageUrl
  if (!data.metaShareImageUrl) {
    data.metaShareImageUrl = thumbnail;
  }

  ctx.params.data = data;

  return await next();
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
    strapi.documents.use(generateMetadata);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
