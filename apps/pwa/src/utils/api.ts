import { Strapi } from "@pkrbt/openapi";
import { API_URL } from "@/config/common";
import { singleton } from "./singleton";

function createStrapi() {
  return new Strapi({
    baseUrl: API_URL,
    path: "",
  });
}

const api = singleton("api", createStrapi);

export default api;
