/**
 * `blocks` middleware
 */

import type { Core } from "@strapi/strapi";
import kategori from "../../kategori/controllers/kategori";

const imageFields = ["url", "alternativeText", "width", "height"];
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In blocks middleware.");

    /*
    ctx.query.populate = {
      kategori: {
        fields: ["nama"],
      },
      blocks: {
        on: {
          "shared.image": {
            populate: {
              file: {
                fields: imageFields,
              },
            },
          },
          "shared.slider": {
            populate: {
              files: {
                fields: imageFields,
              },
            },
          },
          "shared.rich-text-md": {
            fields: ["body"],
          },
        },
      },
    };
    */
    ctx.query.populate = [
      "kategori",
      "blocks.file",
      "blocks.files",
      "blocks.body",
    ];
    ctx.query.orderBy = [
      {
        publishedAt: "desc",
      },
    ];

    await next();
  };
};
