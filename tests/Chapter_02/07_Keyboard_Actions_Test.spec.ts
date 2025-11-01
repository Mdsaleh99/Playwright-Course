import { test, expect } from "@playwright/test";

test("Keyboard actions in playwright", async ({ page }) => {
    await page.goto("https://www.google.com");

    // Enter action from keyboard
    await page.getByLabel("Search", { exact: true }).first().click()
    await page.getByLabel("Search", { exact: true }).first().fill('Playwright by testers talk')
    await page.getByLabel("Search", { exact: true }).first().press("Enter")

    // selecting and deleting from keyboard
    await page.getByLabel("Search", { exact: true }).first().click();
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Delete")

    // press Tab and Enter
    await page.getByLabel("Search", { exact: true }).first().click();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
});
