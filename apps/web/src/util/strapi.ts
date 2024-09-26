"use server";

import { Strapi } from "@pkrbt/strapi-bridge";

export default async function createStrapi() {
  const token = process.env.STRAPI_PUBLIC_TOKEN;
  return new Strapi({
    baseUrl: "http://localhost:1337",
    token: token,
    fetch: {},
  });
}
