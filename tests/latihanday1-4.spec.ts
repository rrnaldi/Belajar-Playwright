import { test, expect } from "@playwright/test";

// Soal 1 //
test("Login Berhasil", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

// Soal 2 //
test("Login dengan password kosong", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Password is required",
  );
});

// Soal 3 //
test("Login dengan Username kosong", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Username is required",
  );
});
// Soal 4 //
test("Login dengan Password salah", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("pass123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
// Soal 5 //
test("Login dengan Username dan Password kosong", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Username is required",
  );
});
