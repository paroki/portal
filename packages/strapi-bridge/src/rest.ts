import { Strapi } from "./core";
import { Item, PagedCollection } from "./types";

/**
 * Reusable strapi rest function
 */
export function rest<T extends Item>(strapi: Strapi, path: any) {
  return {
    create: async (item: T): Promise<T> => {
      const { data, error } = await strapi.fetch.POST(path, item as any);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    read: async (documentId: string, init = {}): Promise<T> => {
      const url: any = `${path}/${documentId}`;
      const { data: item, error } = await strapi.fetch.GET(url, init);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }
      return item;
    },
    update: async (documentId: string, item: T): Promise<T> => {
      const url: any = `${path}/${documentId}`;
      const { data, error } = await strapi.fetch.PUT(url, item as any);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    delete: async (item: T, init?: {}): Promise<T> => {
      const url: any = `${path}/${item.documentId}`;
      const { data, error } = await strapi.fetch.DELETE(url, init as any);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    list: async function (init = {}): Promise<PagedCollection<T>> {
      const { data: rdata, error } = await strapi.fetch.GET(path, init);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      const { data: items, meta } = rdata;
      return { items, meta };
    },
  };
}
