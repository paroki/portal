"use server";

import createStrapi from "@/util/strapi";

export async function fetchBerita() {
  const strapi = await createStrapi();
  return await strapi.berita.list();
}

export async function readBerita(documentId: string) {
  const strapi = await createStrapi();
  return await strapi.berita.read(documentId);
}
