import { StrapiCore } from "./core";
import { blog } from "./plugins";

export const Strapi = StrapiCore.plugin(blog).defaults({
  baseUrl: process.env.STRAPI_URL ?? "http://localhost:1337",
  path: "/api",
});

// eslint-disable-next-line no-redeclare
export type Strapi = InstanceType<typeof Strapi>;
