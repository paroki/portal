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

describe("strapi.berita", () => {
  it("create() should create new berita", async () => {
    const rawData = {
      data: { id: 1 },
    };

    server.use(
      http.post("http://localhost:1337/api/beritas", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();
    const item = await strapi.berita.create({
      judul: "Some Judul",
    });
    expect(item).toBeDefined();
  });

  it("read() should fetch a list of berita", async () => {
    const rawData = {
      data: { id: 1 },
    };

    server.use(
      http.get("http://localhost:1337/api/beritas/docid", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const item = await strapi.berita.read("docid");
    expect(item).toBeDefined();
  });

  it("update() should update berita", async () => {
    const rawData = {
      data: { documentId: "testing", judul: "testing" },
    };

    server.use(
      http.put("http://localhost:1337/api/beritas/docid", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const item = await strapi.berita.update("docid", rawData.data);
    expect(item).toBeDefined();
  });

  it("delete() should delete berita", async () => {
    const rawData = {
      data: { documentId: "docid", judul: "testing" },
    };

    server.use(
      http.delete("http://localhost:1337/api/beritas/docid", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const item = await strapi.berita.delete(rawData.data);
    expect(item).toBeDefined();
  });

  it("list() should fetch a list of berita", async () => {
    const rawData = {
      data: [{ id: 1 }],
      meta: { page: 1 },
    };

    server.use(
      http.get("http://localhost:1337/api/beritas", () =>
        HttpResponse.json(rawData, { status: 200 }),
      ),
    );

    const strapi = createStrapi();

    const { items, meta } = await strapi.berita.list();

    expect(items).toBeDefined();
    expect(meta).toBeDefined();
  });
});
