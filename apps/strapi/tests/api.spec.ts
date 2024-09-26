import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";
import { cleanupStrapi, setupStrapi } from "./helpers/strapi";

describe("strapi", () => {
  beforeAll(async () => {
    await setupStrapi();
  });

  afterAll(async () => {
    await cleanupStrapi();
  });

  it("strapi should be defined", () => {
    expect(strapi).toBeDefined();
  });

  require("./berita");
});
