import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:3000/";

test("app shows quote and author", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const title = await page.getByRole("heading");

  const textContent = await text.textContent();
  const titleContent = await title.textContent();

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(titleContent?.length).toBeGreaterThan(0);
});
