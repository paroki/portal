import type { StrapiCore as Strapi } from "../";
import { rest } from "../core";
import type { Article, Static } from "../types";

/**
 * Organize plugins by it's type
 */
export function blog(api: Strapi) {
  return {
    article: rest<Article>(api, "/articles"),
    static: rest<Static>(api, "/statics"),
  };
}
