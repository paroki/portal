"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Box, Card, Inset, Text } from "@radix-ui/themes";
import { EyeIcon } from "lucide-react";
import LinkBtn from "../link";
import Image from "next/image";
import { Berita, Blocks, PagedCollection } from "@pkrbt/openapi";
import { extractThumbnail } from "@/util/blocks";
import { useState } from "react";
import lipsum from "@/util/lipsum";

type Props = {
  listBerita: PagedCollection<Berita>;
};
export default function BeritaCaraousel({ listBerita }: Props) {
  const [items] = useState(listBerita.items);
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  );

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {items.map((berita, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 group"
            >
              <Box maxWidth="240px">
                <Card size="2">
                  <Inset
                    clip="padding-box"
                    side="top"
                    pb="current"
                    className="relative rounded overflow-hidden"
                  >
                    <div className="absolute w-full h-full bg-primary-400 opacity-0 group-hover:opacity-50 top-0 flex justify-center items-center transition-all">
                      <EyeIcon className="text-white w-9 h-9" />
                    </div>
                    <Image
                      width={200}
                      height={140}
                      src={extractThumbnail(berita.blocks as Blocks)}
                      alt="Bold typography"
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 140,
                        backgroundColor: "var(--gray-5)",
                      }}
                    />
                  </Inset>
                  <Text as="div">
                    <h3 className="my-1 text-lg">{berita.judul}</h3>
                    <Text size={"1"} as="p">
                      {(
                        berita.deskripsi ?? lipsum.generateParagraphs(1)
                      ).substring(0, 100)}
                    </Text>
                  </Text>
                </Card>
              </Box>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-end mt-8">
        <LinkBtn name="Selengkapnya" path="/berita" />
      </div>
    </>
  );
}
