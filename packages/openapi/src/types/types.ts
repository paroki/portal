import { components } from "./openapi";

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

export type SearchParams = {
  page?: number;
  limit?: number;
  sort?: string[];
  filters?: {
    [key: string]: number | string | object;
  };
};

export interface Item {
  id?: number;
  documentId?: string;
}

/* Blog Type Section */
export type Category = components["schemas"]["Category"] & Item;
export type Article = components["schemas"]["Article"] & Item;
export type Static = components["schemas"]["Static"] & Item;
export type Marriages = components["schemas"]["AnMarriage"] & Item;

/* Organization Section */
export type Organization = components["schemas"]["Organization"] & Item;
export type OrgStructure = components["schemas"]["OrgStructure"] & Item;
export type OrgPosition = components["schemas"]["OrgPosition"] & Item;
export type OrgMember = components["schemas"]["OrgMember"] & Item;
