import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test("should have page title", async ({ page }) => {
  await page.goto(BASE_URL + "/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Paroki Kristus Raja Barong Tongkok/);
});

/*
test("get started link", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Click the get started link.
  //await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Beranda" })).toBeVisible();
});
*/
