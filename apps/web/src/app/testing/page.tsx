"use server";

import Testing from "./component";
import { fetchBerita } from "./fetch";

export default async function Page() {
  const data = await fetchBerita();

  return <Testing initial={data} />;
}
