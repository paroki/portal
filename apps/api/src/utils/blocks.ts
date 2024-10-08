import {
  BlockImage,
  BlockRichText,
  BlockSeo,
  BlockSlider,
} from "../../types/generated/components";

export type ExtractedBlocks = {
  thumbnail: string;
  description: string;
};

export async function extractBlocks(blocks: any): Promise<ExtractedBlocks> {
  let description = null;
  let thumbnail = null;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if ("block.rich-text" === block.__component && null === description) {
      const content: string = block.body as string;
      const contents = content
        .replace(/\#.+$/gm, "")
        .trim()
        .split(/\n\s*\n/);
      description = contents[0];
    } else if ("block.image" === block.__component && null == thumbnail) {
      thumbnail = block.image.formats.thumbnail.url;
    } else if ("block.slider" === block.__component && null == thumbnail) {
      if (block.images.length > 0) {
        thumbnail = block.images[0].formats.thumbnail.url;
      }
    }
  }
  return { description, thumbnail };
}
