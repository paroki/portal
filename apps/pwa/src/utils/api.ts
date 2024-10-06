import { Strapi } from "@pkrbt/openapi";
import { API_URL } from "@/config/common";

const api = new Strapi({
  baseUrl: API_URL,
});

export default api;
