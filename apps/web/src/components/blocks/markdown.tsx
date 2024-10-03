import { BlockRichText } from "@pkrbt/openapi";

export default function BlockMarkdownView({ block }: { block: BlockRichText }) {
  return <p>{block.body}</p>;
}
