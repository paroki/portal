import { Strapi } from "@pkrbt/openapi";
import invariant from "tiny-invariant";

invariant(process.env.STRAPI_URL, "Missing environment var");
invariant(process.env.STRAPI_READER_TOKEN, "Missing environment var");

export const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";

export const strapi = new Strapi({
  baseUrl: `${STRAPI_URL}`,
  path: "/api",
  token: process.env.STRAPI_READER_TOKEN,
});
