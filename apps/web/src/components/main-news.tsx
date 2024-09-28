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

interface News {
  title: string;
  thumb: string;
  slug: string;
}

const newsAll: News[] = [
  {
    title: "Obviously Failed",
    thumb:
      "https://img.freepik.com/free-photo/priest-inside-church-building_23-2151103916.jpg?t=st=1727270278~exp=1727273878~hmac=136d7d4e7253e18ee98b0dce09c6d862d84e387efb795aa4c84932bbe2be4648&w=1060",
    slug: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est voluptate.",
  },
  {
    title: "Obviously Good",
    thumb:
      "https://img.freepik.com/free-photo/people-visiting-praying-church-building_23-2151103926.jpg?t=st=1727270317~exp=1727273917~hmac=9aa4c5d6cf85df6a5be33f8b8184cd829d3322f501e9ec687d815a2c95e8b70e&w=1060",
    slug: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores.",
  },
  {
    title: "Obviously Randomly",
    thumb:
      "https://img.freepik.com/free-photo/people-praying-religions-gathering_23-2151153299.jpg?t=st=1727270343~exp=1727273943~hmac=983f7706f8bfde767e30a78470b8609b1b9e411b2d1861ff87cc0056ae855610&w=1380",
    slug: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    title: "Obviously Confusing",
    thumb:
      "https://img.freepik.com/free-photo/beautiful-church-background_23-2149285697.jpg?t=st=1727270368~exp=1727273968~hmac=69cb9bd5551c5f37b061536db75e8a618b2c4842ab4b5e47deba6dd0b53d29cd&w=1060",
    slug: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "Obviously Peaceful",
    thumb:
      "https://img.freepik.com/free-photo/people-visiting-praying-church-building_23-2151103926.jpg?t=st=1727270317~exp=1727273917~hmac=9aa4c5d6cf85df6a5be33f8b8184cd829d3322f501e9ec687d815a2c95e8b70e&w=1060",
    slug: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est voluptate placeat rerum.",
  },
];

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
                    <h3 className="my-1 text-lg">{news.title}</h3>
                    <p>{news.slug}</p>
                  </Text>
                </Card>
              </Box>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-end mt-8">
        <LinkBtn name="Selengkapnya" path="#" />
      </div>
    </>
  );
}
