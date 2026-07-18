import { test } from "@playwright/test";

test("Belajar Fixture", async ({ page, browserName }) => {
  console.log(browserName);

  await page.goto("https://www.google.com");

  console.log(await page.title());
});
