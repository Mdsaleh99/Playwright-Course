import { test, expect } from "@playwright/test";

test("Capture screenshot in playwright", async ({
    page,
}) => {
    await page.goto("https://www.youtube.com/@chaiaurcode");

    // capture element screenshot
    await page.locator('#page-header-container').screenshot({
        path: './screenshots/Element-Screenshot.png'
    })

    // capture page screenshot
    await page.screenshot({
        path: "./screenshots/Page-Screenshot.png",
    });

    // capture full page screenshot
    await page.screenshot({
        path: "./screenshots/Full-Page-Screenshot.png",
        fullPage: true
    });
});
