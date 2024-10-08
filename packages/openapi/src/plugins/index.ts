import type { StrapiCore as Strapi } from "../core";
import { rest } from "../core";
import {
  type Marriage,
  type Article,
  type Static,
  Announcement,
} from "../types";

/**
 * Organize plugins by it's type
 */
export function plugins(strapi: Strapi) {
  return {
    article: rest<Article>(strapi, "/articles"),
    static: rest<Static>(strapi, "/statics"),
    mariages: rest<Marriage>(strapi, "/an-marriages"),
    annoucements: rest<Announcement>(strapi, "/announcements"),
  };
}
