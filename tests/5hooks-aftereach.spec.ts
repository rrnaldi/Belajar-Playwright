import { test } from "@playwright/test";

test.beforeEach(async () => {
  console.log("=== Sebelum Test ===");
});

test.afterEach(async () => {
  console.log("=== Test Selesai ===");
});

test("Test A", async () => {
  console.log("Isi Test A");
});

test("Test B", async () => {
  console.log("Isi Test B");
});
