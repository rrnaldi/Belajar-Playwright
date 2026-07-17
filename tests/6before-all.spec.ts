import { test } from "@playwright/test";

test.beforeAll(async () => {
  console.log("=== Sebelum semua test ===");
});

test.beforeEach(async () => {
  console.log("Sebelum test");
});

test.afterEach(async () => {
  console.log("Setelah test");
});

test.afterAll(async () => {
  console.log("=== Semua test selesai ===");
});

test("Test A", async () => {
  console.log("Isi Test A");
});

test("Test B", async () => {
  console.log("Isi Test B");
});

test("Test C", async () => {
  console.log("Isi Test C");
});
