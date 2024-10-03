import { StrapiCore as Strapi } from ".";
import { Item, PagedCollection, SearchParams } from "../types";

/**
 * Reusable strapi rest function
 */
export function rest<T extends Item>(strapi: Strapi, path: any) {
  return {
    create: async (item: T): Promise<T> => {
      const { data, error } = await strapi.fetch.POST(path, {
        body: {
          data: item,
        },
        cache: "no-store",
      });

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    read: async (documentId: string, init = {}): Promise<T> => {
      const url: any = `${path}/${documentId}`;
      const { data: rdata, error } = await strapi.fetch.GET(url, {
        cache: "no-store",
        ...init,
      });

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }
      const { data: item } = rdata;
      return item;
    },
    update: async (documentId: string, item: T): Promise<T> => {
      const url: any = `${path}/${documentId}`;
      const { data, error } = await strapi.fetch.PUT(url, {
        body: {
          data: {
            ...item,
          },
        },
        cache: "no-store",
      });

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data as T;
    },
    delete: async (item: T, init?: {}): Promise<T> => {
      const url: any = `${path}/${item.documentId}`;
      const { data, error } = await strapi.fetch.DELETE(url, {
        cache: "no-store",
        ...init,
      });

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      return data;
    },
    search: async function (
      params?: SearchParams,
    ): Promise<PagedCollection<T>> {
      const withDefaults: SearchParams = {
        page: 1,
        limit: 5,
        filters: {},
        ...params,
      };

      const { page, limit, filters, sort } = withDefaults;
      const { data: rdata, error } = await strapi.fetch.GET(path, {
        params: {
          query: {
            pagination: {
              page,
              pageSize: limit,
            },
            filters,
            sort,
          },
        },
        cache: "no-cache",
      });

      if (error) {
        console.log(error);
        return Promise.reject(error);
      }

      const { data: items, meta } = rdata;
      return { items, meta };
    },
  };
}
