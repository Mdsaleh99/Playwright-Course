// Import playwright module
import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
    console.log("Running before all tests...");
})

test.beforeEach(async ({page}) => {
    console.log("Running before each tests...");
    await page.goto("https://www.google.com");
})

test.afterEach(async () => {
    console.log("Running after each tests...");
})

test.afterAll(async () => {
    console.log("Running after all tests...");
})
// npx playwright test 03_Hooks_Test.spec.ts --headed
test("Test 1", async ({
    page,
}) => {
    console.log("Test 1 execution started....");
    
    // await page.goto("https://www.google.com");

    // Search with Keywords - use pick locator, go to Testing from vs code sidebar -> in 'Playwright' option click -> in 'Tools' choose Pick locator option
    await page.getByRole("combobox", { name: "Search" }).fill("chaicode");
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
    await page
        .getByRole("link", { name: "ChaiCode - Home for" })
        .first()
        .click();
    // validate web page title
    await expect(
        page.getByRole("heading", { name: "Consistency and Community" })
    ).toBeVisible();
});


test("Test 2", async ({
    page,
}) => {
    console.log("Test 2 execution started....");

    // await page.goto("https://www.google.com");

    // Search with Keywords - use pick locator, go to Testing from vs code sidebar -> in 'Playwright' option click -> in 'Tools' choose Pick locator option
    await page.getByRole("combobox", { name: "Search" }).fill("chaicode");
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
    await page
        .getByRole("link", { name: "ChaiCode - Home for" })
        .first()
        .click();
    // validate web page title
    await expect(
        page.getByRole("heading", { name: "Consistency and Community" })
    ).toBeVisible();
});
