/* eslint-disable jsx-a11y/alt-text */
import { BlockImage } from "@pkrbt/openapi";
import Image from "@/components/ui/image";

export default function BlockImageView({ block }: { block: BlockImage }) {
  return <Image image={block.image} size="medium" />;
}
