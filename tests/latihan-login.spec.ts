import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

// Soal 1 //
test("Login Berhasil", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

// Soal 2 //
test("Login Dengan Password Salah", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login("standard_user", "pass123");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
// Soal 3 //
test("Login Dengan Password Kosong", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login("standard_user", "");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Password is required",
  );
});
// Soal 4 //
test("Login Dengan Username Kosong", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login("", "secret_sauce");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required",
  );
});
// Soal 5 //
test("Login Dengan Username & Password Kosong", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login("", "");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required",
  );
});
