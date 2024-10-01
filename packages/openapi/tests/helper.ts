import { Strapi } from "../src";

export function createStrapi() {
  const withDefaults = {
    baseUrl: "http://localhost:1337",
    fetch: {},
  };
  return new Strapi(withDefaults);
}
