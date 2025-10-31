import { test, expect } from "@playwright/test";

test("Record at cursor test", async ({
    page,
}) => {
    // Go to URL
    await page.goto("https://www.google.com");

    // Search with Keywords - use pick locator, go to Testing from vs code sidebar -> in 'Playwright' option click -> in 'Tools' choose Pick locator option
    await page.getByRole("combobox", { name: "Search" }).fill('chaicode')
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
    await page.getByRole("link", { name: "ChaiCode - Home for" }).first().click()
    // validate web page title
    await expect(
        page.getByRole("heading", { name: "Consistency and Community" })
    ).toBeVisible()

    // this is done using 'record cursor' option
    await expect(page.getByText('Trusted by 1.5M+ Developers')).toBeVisible();
    await page.getByText('Content is everywhere. We').click();
});