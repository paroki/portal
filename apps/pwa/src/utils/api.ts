import { Strapi } from "@pkrbt/openapi";

const api = new Strapi({
  baseUrl: process.env.STRAPI_URL ?? "http://localhost:1337",
  path: "/api",
});

const accessToken = process.env.STRAPI_TOKEN ?? "token";
api.fetch.use({
  onRequest({ request }) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
    return request;
  },
});

export default api;
