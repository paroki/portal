import { StrapiCore } from "./core";
import { blog, organization } from "./plugins";

export const Strapi = StrapiCore.plugin(blog, organization).defaults({
  baseUrl: "http://localhost:1337",
  path: "/api",
});

// eslint-disable-next-line no-redeclare
export type Strapi = InstanceType<typeof Strapi>;
