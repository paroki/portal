import { SharedRichTextMd } from "@pkrbt/openapi";
import { Text } from "@radix-ui/themes";

export default function BlockMarkdown({ block }: { block: SharedRichTextMd }) {
  return <Text as="p">{block.body}</Text>;
}
