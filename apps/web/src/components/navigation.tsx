import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { SignOut } from "./auth/sign-out";
import SignIn from "./auth/sign-in";
import { auth } from "@/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <Flex gap={"3"}>
      <Link href="/">Homepage</Link>
      <Link href="/sejarah">Sejarah</Link>
      <Link href="/dpp">DPP</Link>
      <Link href="/berita">Berita</Link>
      <Link href="/formulir">Formulir</Link>
      {session ? <SignOut /> : <SignIn />}
    </Flex>
  );
}
