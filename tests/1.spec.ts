import { test, expect } from "@playwright/test";

test("Membuka Google", async ({ page }) => {
  await page.goto("https://www.google.com");

  await page.goto("https://www.youtube.com");

  await page.waitForTimeout(5000);
});
