import type { Strapi } from "../core";
import { rest } from "../rest";
import type { Berita, Item, Static } from "../types";

const withPopulateBlocks = {
  params: {
    query: {
      populate: {
        blocks: {
          populate: "*",
        },
      },
    },
  },
};

const withLatest = {
  params: {
    sort: ["publishedAt:desc"],
  },
};

function usingBlocks<T extends Item>(strapi: Strapi, path: string) {
  async function list(init = {}) {
    const withDefaults = {
      ...withPopulateBlocks,
      ...withLatest,
      ...init,
    };
    return await rest<T>(strapi, path).list(withDefaults);
  }

  return {
    ...rest<Berita>(strapi, path),
    list,
  };
}

/**
 * Organize plugins by it's type
 */
export function blog(strapi: Strapi) {
  return {
    berita: usingBlocks<Berita>(strapi, "/beritas"),
    static: usingBlocks<Static>(strapi, "/statics"),
  };
}
