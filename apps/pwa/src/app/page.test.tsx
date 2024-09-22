import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Beranda", () => {
  it("should rendered properly", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Beranda" }),
    ).toBeDefined();
  });
});
