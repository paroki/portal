import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { createStrapi } from "../helper";

const server = setupServer();
beforeAll(() => {
  // NOTE: server.listen must be called before `createClient` is used to ensure
  // the msw can inject its version of `fetch` to intercept the requests.
  server.listen({
    onUnhandledRequest: (request) => {
      throw new Error(
        `No request handler found for ${request.method} ${request.url}`,
      );
    },
  });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("strapi.article", () => {
  it("create() should create new article", async () => {
    const rawData = {
      data: { id: 1 },
    };

    server.use(
      http.post("http://localhost:1337/api/articles", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();
    const item = await strapi.article.create({
      title: "Some Judul",
    });
    expect(item).toBeDefined();
  });

  it("read() should fetch a list of article", async () => {
    const rawData = {
      data: { id: 1 },
    };

    server.use(
      http.get("http://localhost:1337/api/articles/docid", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const item = await strapi.article.read("docid");
    expect(item).toBeDefined();
  });

  it("update() should update article", async () => {
    const rawData = {
      data: { documentId: "testing", title: "testing" },
    };

    server.use(
      http.put("http://localhost:1337/api/articles/docid", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const item = await strapi.article.update("docid", rawData.data);
    expect(item).toBeDefined();
  });

  it("delete() should delete article", async () => {
    const rawData = {
      data: { documentId: "docid", title: "testing" },
    };

    server.use(
      http.delete("http://localhost:1337/api/articles/docid", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const item = await strapi.article.delete(rawData.data);
    expect(item).toBeDefined();
  });

  it("list() should fetch a list of article", async () => {
    const rawData = {
      data: [{ id: 1 }],
      meta: { page: 1 },
    };

    server.use(
      http.get("http://localhost:1337/api/articles", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const { items, meta } = await strapi.article.search();

    expect(items).toBeDefined();
    expect(meta).toBeDefined();
  });
});
