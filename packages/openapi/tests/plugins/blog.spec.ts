import { describe, expect, it } from "vitest";
import { api, server } from "../mocks";

server.listen();

describe("blog", () => {
  it("should create new article", async () => {
    /*
    const client = createClient<paths>({
      baseUrl: "http://localhost/api",
      fetch: global.fetch,
    });

    client.POST("/articles", {
      body: {
        data: {
          title: "Testing",
        },
      },
    });
    */
    const item = await api.article.create({
      title: "Testing",
    });
    expect(item).toBeDefined();
  });
});
