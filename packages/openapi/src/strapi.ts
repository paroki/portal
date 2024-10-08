import { StrapiCore } from "./core";
import { plugins } from "./plugins";

export const Strapi = StrapiCore.plugin(plugins).defaults({
  baseUrl: "http://localhost:1337",
  path: "/api",
});

// eslint-disable-next-line no-redeclare
export type Strapi = InstanceType<typeof Strapi>;
