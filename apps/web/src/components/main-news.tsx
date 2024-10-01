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
import LinkBtn from "./link";
import Image from "next/image";
import { newsAll } from "@/util/news";
import Link from "next/link";

export default function MainNews() {
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
          {newsAll.map((news, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 group "
            >
              <Link href={`/berita/${news.id}`}>
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
                        src={news.thumb}
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
                    <Text as="div" size="3">
                      <h3 className="my-1 text-base">{news.title}</h3>
                      <p className="text-sm">{news.slug}</p>
                    </Text>
                  </Card>
                </Box>
              </Link>
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
