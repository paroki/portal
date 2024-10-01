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
export type BlockImage = components["schemas"]["BlockImageComponent"];
export type BlockSlider = components["schemas"]["BlockSliderComponent"];
export type BlockRichText = components["schemas"]["BlockRichTextComponent"];
export type BlockSeo = components["schemas"]["BlockSeoComponent"];

export type BlockComponent =
  | BlockImage
  | BlockSlider
  | BlockRichText
  | BlockSeo;

export type Blocks = BlockComponent[];

/* Blog Type Section */
export type Article = components["schemas"]["Article"] & Item;
export type Static = components["schemas"]["Static"] & Item;
