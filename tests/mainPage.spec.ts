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

test("should change the quote and author when the button is clicked", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const title = await page.getByRole("heading");

  const initialQuote = await text.textContent();
  const initialAuthor = await title.textContent();

  await page.click('button:has-text("Change Quote")');
  await page.waitForTimeout(2000);

  const newText = await page.getByRole("paragraph");
  const newTitle = await page.getByRole("heading");

  const newQuote = await newText.textContent();
  const newAuthor = await newTitle.textContent();

  expect(newQuote).not.toBe(initialQuote);
  expect(newAuthor).not.toBe(initialAuthor);
});
