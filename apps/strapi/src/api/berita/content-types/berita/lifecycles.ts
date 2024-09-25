import { extractBlocks } from "../../../../util/blocks";

const strapi = globalThis.strapi;

export async function doUpdate(result) {
  const { deskripsi, thumbnail } = await extractBlocks(result);

  const update = {};

  if (deskripsi && !result.deskripsi) {
    Object.assign(update, { deskripsi });
  }

  if (
    result.title != result.metaTitle ||
    result.deskripsi != result.metaDescription ||
    result.thumbnail != result.shareImageUrl
  ) {
    Object.assign(update, {
      metaTitle: result.judul,
      metaDescription: result.deskripsi ?? deskripsi,
      shareImageUrl: thumbnail,
    });
  }

  // only do update when there are keys in update
  if (Object.keys(update).length > 0) {
    await strapi.documents("api::berita.berita").update({
      documentId: result.documentId,
      data: {
        ...update,
      },
    });
  }
}

export default {
  async afterCreate(event) {
    await doUpdate(event.result);
  },
};
