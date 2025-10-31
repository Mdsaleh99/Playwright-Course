import { test, expect } from "@playwright/test";

test("Mouse selection in playwright", async ({ page }) => {
    await page.goto(
        "https://www.google.com/search?q=playwright+by+testers+talk"
    );

    // Left button click
    await page
        .getByRole("link", { name: "Playwright by Testers Talk" })
        .first()
        .click({ button: "left" });

    // Middle button click
    // await page.getByRole('link', { name : 'Playwright by Testers Talk'}).first().click({ button :'middle'});

    // Right button click
    // await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button: 'right' });

    // Mouse hover
    // await page.getByLabel('Search by voice').hover();

    // Double click
    // await page.getByLabel('Search by voice').dblclick();
});