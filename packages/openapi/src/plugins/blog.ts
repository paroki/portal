import type { StrapiCore as Strapi } from "../core";
import { rest } from "../core";
import type { Berita, Static } from "../types";

/**
 * Organize plugins by it's type
 */
export function blog(strapi: Strapi) {
  return {
    berita: rest<Berita>(strapi, "/beritas"),
    static: rest<Static>(strapi, "/statics"),
  };
}
