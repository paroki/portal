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

export type Image = Omit<components["schemas"]["UploadFile"], "formats"> & {
  formats: {
    thumbnail: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
    large: ImageFormat;
  };
};

export type ImageFormat = Pick<
  Image,
  "name" | "hash" | "ext" | "mime" | "width" | "height" | "size" | "url"
> & {
  path: string;
  sizeInBytes: number;
};

export type Blocks = components["schemas"]["Article"]["blocks"];
export type BlockImage = components["schemas"]["BlockImageComponent"] & {
  image: Image;
};
export type BlockSeo = components["schemas"]["BlockSeoComponent"];
export type BlockSlider = components["schemas"]["BlockSliderComponent"];
export type BlockRichText = components["schemas"]["BlockRichTextComponent"];
export type BlockContent = BlockImage | BlockSeo | BlockSlider | BlockRichText;

export interface Item {
  id?: number;
  documentId?: string;
}

/* Blog Type Section */
export type Category = components["schemas"]["Category"] & Item;
export type Article = components["schemas"]["Article"] &
  Item & { blocks?: Blocks };
export type Static = components["schemas"]["Static"] &
  Item & { blocks?: Blocks };

/* Announcement Section */
export type Marriage = components["schemas"]["AnMarriage"] & Item;
export type Announcement = components["schemas"]["Announcement"] & Item;
export type DPP = components["schemas"]["Dpp"] & Item;
