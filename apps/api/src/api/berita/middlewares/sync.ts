/**
 * `sync` middleware
 */

import type { Core } from "@strapi/strapi";

/**
 * Synchronize berita to meta attributes
 */
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In sync middleware.");

    await next();
  };
};
