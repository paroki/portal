import { StrapiCore } from "./core";
import { blog } from "./plugins";

export const Strapi = StrapiCore.plugin(blog).defaults({
  baseUrl: process.env.STRAPI_URL ?? "http://127.0.0.1:1337",
  fetch: {},
});

// eslint-disable-next-line no-redeclare
export type Strapi = InstanceType<typeof Strapi>;
