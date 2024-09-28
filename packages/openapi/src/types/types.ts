import { components } from "./openapi";

export type FetchOptions = {
  headers: any;
};

export type Pagination = {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
};

export type PagedCollectionMeta = {
  pagination: Pagination;
};

export interface PagedCollection<T> {
  items: T[];
  meta: PagedCollectionMeta;
}

export interface Item {
  id?: number;
  documentId?: string;
}

/* Blog Type Section */
export type Berita = components["schemas"]["Berita"] & Item;
export type Static = components["schemas"]["Static"] & Item;
