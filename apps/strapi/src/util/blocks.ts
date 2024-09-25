const strapi = globalThis.strapi;

type ExtractedBlocks = {
  deskripsi?: string;

  /**
   * The thumbnail url for google search and lists
   */
  thumbnail?: string;

  hasSeo: boolean;
};

type EventResult = {
  documentId: string;
};

/**
 * Extract deskripsi from blocks
 */
export async function extractBlocks(
  result: EventResult,
): Promise<ExtractedBlocks> {
  let deskripsi: string;
  let thumbnail: string;
  let hasSeo = false;

  const content = await strapi.documents("api::berita.berita").findOne({
    documentId: result.documentId,
    populate: ["blocks.file", "blocks.body", "blocks.files"],
  });

  content.blocks.forEach((item: any) => {
    if (item.__component.includes("rich-text")) {
      deskripsi = item.body;
    } else if (item.__component.includes("image")) {
      thumbnail = item.file.formats.thumbnail.url;
    } else if (item.__component.includes("slider") && !thumbnail) {
      thumbnail = item.files.forEach((isl: any) => {
        thumbnail = isl.url;
      });
    } else if (item.__component.includes("seo")) {
      hasSeo = true;
    }
  });

  return { deskripsi, thumbnail, hasSeo };
}
