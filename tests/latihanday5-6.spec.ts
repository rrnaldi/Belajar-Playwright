import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
});

test("Checkout Backpack", async ({ page }) => {});
test("Checkout Bike Light", async ({ page }) => {});
test("Checkout Jacket", async ({ page }) => {});
