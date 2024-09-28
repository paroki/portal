import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import { STRAPI_URL } from "@/util/strapi";
import { SharedSlider } from "@pkrbt/openapi";

export default function BlockSlider({ slider }: { slider: SharedSlider }) {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {slider.files?.map((file, index) => (
          <CarouselItem key={index}>
            <Image
              width={file.width}
              height={file.height}
              src={`${STRAPI_URL}/${file.url}`}
              alt="Bold typography"
              style={{
                maxWidth: "400px",
                display: "block",
                objectFit: "cover",
                backgroundColor: "var(--gray-5)",
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
