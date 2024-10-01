import { StrapiCore as Strapi } from "../core";
import { Item, PagedCollection } from "../types";

/**
 * Reusable strapi rest function
 */
export function rest<T extends Item>(api: Strapi, path: any) {
  return {
    create: async (item: T): Promise<T> => {
      const { data, error } = await api.fetch.POST(path, {
        body: {
          data: {
            ...item,
          },
        },
      });

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    read: async (documentId: string, init = {}): Promise<T> => {
      const url: any = `${path}/${documentId}`;
      const { data: item, error } = await api.fetch.GET(url, init);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }
      return item;
    },
    update: async (documentId: string, item: T): Promise<T> => {
      const url: any = `${path}/${documentId}`;
      const { data, error } = await api.fetch.PUT(url, item as any);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    delete: async (item: T, init?: {}): Promise<T> => {
      const url: any = `${path}/${item.documentId}`;
      const { data, error } = await api.fetch.DELETE(url, init as any);

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    search: async function (init = {}): Promise<PagedCollection<T>> {
      const { data: rdata, error } = await api.fetch.GET(path, init);
      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      const { data: items, meta } = rdata;
      return { items, meta };
    },
  };
}
