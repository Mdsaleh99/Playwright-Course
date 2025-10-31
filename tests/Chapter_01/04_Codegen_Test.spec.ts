import { test, expect } from "@playwright/test";

// use this command 'npx playwright codegen' for codegen and it will open browser and playwright inspector.

test("Codegen test case", async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    await page.getByRole("combobox", { name: "Search" }).click();
    await page
        .getByRole("combobox", { name: "Search" })
        .fill("playwright by testers talk");
    await page.getByRole("button", { name: "Search", exact: true }).click();
    await page
        .getByRole("link", { name: "Playwright by Testers Talk ✅" })
        .click();
    // await page
    //     .getByRole("button", { name: "Pause keyboard shortcut k" })
    //     .click();
    await expect(
        page.getByRole("link", { name: "Playwright by Testers Talk ✅" })
    ).toBeVisible();
});
