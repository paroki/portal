import { Strapi } from "@pkrbt/openapi";
// import invariant from "tiny-invariant";

// invariant(process.env.STRAPI_URL, "Missing STRAPI_URL environment var");
// invariant(process.env.STRAPI_TOKEN, "Missing STRAPI_TOKEN environment var");

export const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";

const accessToken = process.env.STRAPI_TOKEN ?? undefined;

const api = new Strapi({
  baseUrl: `${STRAPI_URL}`,
  path: "/api",
});

if (accessToken) {
  api.fetch.use({
    onRequest({ request }) {
      request.headers.set("Authorization", `Bearer ${accessToken}`);
      return request;
    },
  });
}

export default api;
