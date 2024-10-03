"use client";
import { BlockImage } from "@pkrbt/openapi";
import Image from "next/image";

export default function BlockImageView({ block }: { block: BlockImage }) {
  return (
    <div>
      <Image
        src={`http://localhost:1337${block.image?.url}`}
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
