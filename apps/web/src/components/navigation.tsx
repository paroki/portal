import { Flex } from "@radix-ui/themes";
import Link from "next/link";

export default function Navigation() {
  return (
    <Flex gap={"3"}>
      <Link href="/">Homepage</Link>
      <Link href="/sejarah">Sejarah</Link>
      <Link href="/dpp">DPP</Link>
      <Link href="/berita">Berita</Link>
      <Link href="/formulir">Formulir</Link>
    </Flex>
  );
}
