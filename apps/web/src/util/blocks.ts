"use client";
import { Blocks, SharedImage } from "@pkrbt/openapi";
import invariant from "tiny-invariant";

export function getImageUrl(image: SharedImage): string {
  invariant(image.file?.url);
  return `http://localhost:1337${image.file?.url}`;
}

export function extractThumbnail(blocks: Blocks): string {
  let url = "https://i.imgur.com/3vMyPVu.jpeg";
  blocks?.forEach((item) => {
    if ("shared.image" === item.__component) {
      url = getImageUrl(item);
      return;
    }
  });

  return url;
}
