import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import * as React from "react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer();
const baseUrl = "http://localhost:1337/api";
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

interface Carousel {
  children: React.ReactNode;
}

// Mock next/font/google and specifically Frank_Ruhl_Libre
vi.mock("next/font/google", () => ({
  Frank_Ruhl_Libre: () => ({
    className: "mocked-frank-ruhl-libre",
  }),
}));

// Mock the Carousel component
vi.mock("@/components/ui/carousel", () => {
  return {
    Carousel: ({ children }: Carousel) => <div>{children}</div>,
    CarouselContent: ({ children }: Carousel) => <div>{children}</div>,
    CarouselItem: ({ children }: Carousel) => <div>{children}</div>,
  };
});

describe("Beranda", () => {
  it("should rendered properly", async () => {
    const data = {
      data: [
        {
          id: 1,
          documentId: "docid",
          title: "judul 1",
          description: "deskripsi 1",
          blocks: [
            {
              id: 1,
              __component: "block.seo",
              metaTitle: "meta title",
              metaDescription: "meta description",
              shareImageUrl: "/uploads/imageurl.jpg",
            },
          ],
        },
      ],
      meta: {},
    };
    server.use(
      http.get(`${baseUrl}/*`, () => HttpResponse.json(data, { status: 200 })),
    );

    const jsx = await Home();
    render(jsx);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Menggenggam dengan kasih",
      }),
    ).toBeDefined();
  });
});
