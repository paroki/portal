import { expect, it, describe } from "vitest";
import { createStrapi } from "./helper";

describe("strapi", () => {
  it("should initialize plugins", () => {
    const strapi = createStrapi();

    expect(strapi).toBeDefined();
    expect(strapi.article).toBeDefined();
    expect(strapi.article.search).toBeTypeOf("function");
    expect(strapi.article.create).toBeTypeOf("function");
    expect(strapi.article.update).toBeTypeOf("function");
    expect(strapi.article.delete).toBeTypeOf("function");
  });
});
