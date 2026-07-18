import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login Berhasil", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login("standard_user", "pass123");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
