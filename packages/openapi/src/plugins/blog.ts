import type { StrapiCore as Strapi } from "../core";
import { rest } from "../core";
import type { Article, Static } from "../types";

/**
 * Organize plugins by it's type
 */
export function blog(strapi: Strapi) {
  return {
    article: rest<Article>(strapi, "/articles"),
    static: rest<Static>(strapi, "/statics"),
  };
}
