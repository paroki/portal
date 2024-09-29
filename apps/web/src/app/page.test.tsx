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

const server = setupServer();
const baseUrl = "http://localhost:1337/api";

describe("Beranda", () => {
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
    const data = {
      data: [{ id: 1, judul: "judul 1", deskripsi: "deskripsi 1" }],
      meta: {},
    };
    server.use(
      http.get(`${baseUrl}/beritas`, () =>
        HttpResponse.json(data, { status: 200 }),
      ),
    );
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should rendered properly", async () => {
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
