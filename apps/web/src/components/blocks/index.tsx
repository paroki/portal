import {
  BlockComponent,
  Blocks as BlocksType,
  SharedRichTextMd,
} from "@pkrbt/openapi";
import BlockSlider from "./slider";
import BlockMarkdown from "./markdown";
import BlockImage from "./image";

const Block = ({ block }: { block: BlockComponent }) => {
  if (block.__component === "shared.slider") {
    return <BlockSlider slider={block} />;
  }

  if (block.__component === "shared.image") {
    return <BlockImage image={block} />;
  }

  if (block.__component === "shared.rich-text-md") {
    return <BlockMarkdown block={block as SharedRichTextMd} />;
  }

  return <div>unsupported component {block.__component}</div>;
};

export default function Blocks({ blocks }: { blocks: BlocksType }) {
  return (
    <div>
      {blocks.map((item, index) => (
        <Block key={index} block={item} />
      ))}
    </div>
  );
}
