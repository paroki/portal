import { Strapi } from "../src";

export const strapi = new Strapi({
  baseUrl: "http://127.0.0.1:1337",
  path: "/api",
  token: "",
});
