import {
  Article,
  Static,
  BlockSeo,
  BlockContent,
  BlockRichText,
  BlockImage,
} from "@pkrbt/openapi";
import { STRAPI_URL } from "./strapi";

type BlogContent = Article | Static;

export function extractSeo(item: BlogContent): BlockSeo {
  let seo: BlockSeo = {
    metaTitle: item.title,
    metaDescription: item.description,
  };

  item.blocks?.forEach((block: BlockContent) => {
    if ("block.seo" === block.__component) {
      seo = block;
    } else if (
      "block.rich-text" === block.__component &&
      !seo.metaDescription
    ) {
      const blockCopy = block as BlockRichText;
      seo.metaDescription = blockCopy.body;
    } else if ("block.image" === block.__component && !seo.shareImageUrl) {
      const blockCopy = block as BlockImage;
      seo.shareImageUrl = `${blockCopy.image.formats.thumbnail.url}`;
    }
  });

  if (seo.shareImageUrl && !seo.shareImageUrl.includes(STRAPI_URL)) {
    seo.shareImageUrl = `${STRAPI_URL}${seo.shareImageUrl}`;
  }
  return seo;
}
