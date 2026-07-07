import { test, expect } from "@playwright/test";

test("Tes Login dengan data benar", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("standard_user");

  await page.locator("#password").fill("secret_sauce");

  await page.locator("#login-button").click();

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});

test("Tes Login dengan password kosong", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("standard_user");

  await page.locator("#login-button").click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Password is required",
  );
});
