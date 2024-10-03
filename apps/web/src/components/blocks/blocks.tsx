"use client";
import { BlockContent, Blocks } from "@pkrbt/openapi";
import BlockImageView from "./image";
import BlockSliderView from "./slider";
import BlockMarkdownView from "./markdown";

type Props = {
  blocks: Blocks;
};

function BlockItem({ block }: { block: BlockContent }) {
  if ("block.image" === block.__component) {
    return BlockImageView({ block });
  } else if ("block.slider" === block.__component) {
    return BlockSliderView({ block });
  } else if ("block.rich-text" === block.__component) {
    return BlockMarkdownView({ block });
  } else if ("block.seo" === block.__component) {
    return <></>;
  }
  throw Error("Unsupported block type");
}

export default function BlocksView({ blocks }: Props) {
  return (
    <div>
      {blocks?.map((block, index) => <BlockItem block={block} key={index} />)}
    </div>
  );
}
