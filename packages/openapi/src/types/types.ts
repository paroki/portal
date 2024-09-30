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
export type SharedImage = components["schemas"]["SharedImageComponent"];
export type SharedSlider = components["schemas"]["SharedSliderComponent"];
export type SharedRichText = components["schemas"]["SharedRichTextComponent"];
export type SharedRichTextMd =
  components["schemas"]["SharedRichTextMdComponent"];
export type SharedSeo = components["schemas"]["SharedSeoComponent"];

export type BlockComponent =
  | SharedImage
  | SharedSlider
  | SharedRichText
  | SharedRichTextMd
  | SharedSeo;

export type Blocks = BlockComponent[];

/* Blog Type Section */
export type Berita = components["schemas"]["Berita"] & Item;
export type Static = components["schemas"]["Static"] & Item;
