"use client";

import { STRAPI_URL } from "@/utils/strapi";
import { BlockImage } from "@pkrbt/openapi";
import Image from "next/image";

export default function BlockImageView({ block }: { block: BlockImage }) {
  return (
    <div>
      <Image
        src={`${STRAPI_URL}${block.image?.url}`}
        width={block.image?.width}
        height={block.image?.height}
        alt={block.image?.alternativeText ?? "article image"}
        style={{
          maxWidth: "600px",
        }}
      />
    </div>
  );
}
