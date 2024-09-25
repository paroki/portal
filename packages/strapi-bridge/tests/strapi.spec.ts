import { expect, it, describe } from "vitest";
import { Strapi } from "../src";

describe("strapi", () => {
  it("should initialize plugins", () => {
    const strapi = new Strapi({
      fetch: {},
    });

    expect(strapi).toBeDefined();
    expect(strapi.berita).toBeDefined();
    expect(strapi.berita.list).toBeTypeOf("function");
    expect(strapi.berita.create).toBeTypeOf("function");
    expect(strapi.berita.update).toBeTypeOf("function");
    expect(strapi.berita.delete).toBeTypeOf("function");
  });
});
