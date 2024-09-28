"use client";
import { extractThumbnail } from "@/util/blocks";
import { Berita, Blocks, PagedCollection } from "@pkrbt/openapi";
import Image from "next/image";
import LinkBtn from "../link";
import { Flex } from "@radix-ui/themes";
import lipsum from "@/util/lipsum";

type Props = {
  list: PagedCollection<Berita>;
};

export default function BeritaList({ list }: Props) {
  return (
    <div className="w-3/4">
      {list.items &&
        list.items.map((berita, index) => (
          <Flex key={index} direction={"column"} display={"inline-flex"}>
            <div style={{ minWidth: "200px" }}>
              <Image
                style={{ objectFit: "cover" }}
                width={200}
                height={140}
                src={extractThumbnail(berita.blocks as Blocks)}
                alt="sample image"
              />
            </div>
            <div>
              <h3>{berita.judul}</h3>
              <p>{berita.deskripsi ?? lipsum.generateParagraphs(1)}</p>
              <LinkBtn name="Selengkapnya" path={`/berita/${berita.slug}`} />
            </div>
          </Flex>
        ))}
    </div>
  );
}
