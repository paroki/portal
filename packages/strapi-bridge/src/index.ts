import { Strapi as StrapiCore } from "./core";
import { blog } from "./plugins/blog";

export const Strapi = StrapiCore.plugin(blog).defaults({
  baseUrl: process.env.STRAPI_URL ?? "http://127.0.0.1:1337",
  fetch: {},
});
export type Strapi = InstanceType<typeof Strapi>;

export * from "./types";
