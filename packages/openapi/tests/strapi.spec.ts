import { describe, expect, it } from "vitest";
import { api } from "./mocks";

describe("strapi", () => {
  it("should initialize plugins", () => {
    expect(api).toBeDefined();
    expect(api.article).toBeDefined();
    expect(api.article.search).toBeTypeOf("function");
    expect(api.article.create).toBeTypeOf("function");
    expect(api.article.update).toBeTypeOf("function");
    expect(api.article.delete).toBeTypeOf("function");
  });
});
