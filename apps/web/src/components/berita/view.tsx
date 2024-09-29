"use client";

import { Berita as BeritaType, Blocks as BlocksType } from "@pkrbt/openapi";
import { Text } from "@radix-ui/themes";
import Blocks from "../blocks";
import LinkBtn from "../link";

export default function BeritaView({ item }: { item: BeritaType }) {
  return (
    <div>
      <header>
        <h3>{item.judul}</h3>
        <Text>Terbit pada: {item.publishedAt}</Text>
      </header>

      {/* content start */}
      <div>
        <Blocks blocks={item.blocks as BlocksType} />
      </div>
      <LinkBtn name="Kembali" path="/berita" />
    </div>
  );
}
