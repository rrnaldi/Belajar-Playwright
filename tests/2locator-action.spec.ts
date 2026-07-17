import { test, expect } from "@playwright/test";

test("Tes Login dengan data benar", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("standard_user");

  await page.locator("#password").fill("secret_sauce");

  await page.locator("#login-button").click();
});

test("Login gagal dengan password yang salah", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("password_salah");
  await page.locator("#login-button").click();

  await page.waitForTimeout(10000);
});

test("Login dengan User dan Password Kosong", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("");
  await page.locator("#password").fill("");
  await page.locator("#login-button").click();
});
