"use client";
import { BlockSlider } from "@pkrbt/openapi";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { Card } from "@radix-ui/themes";
import { CardContent } from "../ui/card";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function BlockSliderView({ block }: { block: BlockSlider }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {block.images?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <h1>{item.id}</h1>
                    <Image
                      src={`https://localhost:1337${item.url}`}
                      alt={item.alternativeText ?? "article image"}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
