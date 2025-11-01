// Import playwright module
import { test, expect } from "@playwright/test";

// whenever test fails, in test-results folder -> .last-run.json file, this json file has references of failed test cases

// Command: 'npx playwright test --last-failed' // this command for run only failed test cases 
test("Test 1", async ({ page }) => {
    // Go to URL
    await page.goto("https://www.google.com/");

    // Search with keywords
    await page
        .getByLabel("Search", { exact: true })
        .fill("playwright by testers talk");
    await page.getByLabel("Search", { exact: true }).press("Enter");

    // Click on playlist
    await page
        .getByRole("link", { name: "Playwright by Testers Talk☑️" })
        .first()
        .click();

    // Validate web page title
    await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
});


test("Test 2", async ({ page }) => {
    expect(true).toBe(false);
});


test("Test 3", async ({ page }) => {
    expect(true).toBe(false);
});
