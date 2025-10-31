import { test, expect } from '@playwright/test';

// go to Testing from vs code sidebar -> in Playwright option click -> in Tools choose Record new option

// test('test', async ({ page }) => {
//   await page.goto('https://www.thecodedsa.live/');
//   await page.getByRole('link', { name: 'Sign In', exact: true }).click();
//   await page.getByRole('textbox', { name: 'you@example.com' }).click();
//   await page.getByRole('textbox', { name: 'you@example.com' }).fill('saleh@gmail.com');
//   await page.getByRole('textbox', { name: 'you@example.com' }).press('Tab');
//   await page.getByRole('textbox', { name: '••••••••' }).click();
//   await page.getByRole('textbox', { name: '••••••••' }).fill('Saleh@2025');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await expect(page).toHaveURL("https://thecodedsa.live")
// });

// Generate Proper Readable Playwright HTML Test Report
test("test", async ({ page }) => {
  await test.step('Navigating to URL', async () => {
    await page.goto("https://www.thecodedsa.live/");
  })

  await test.step('Click on Sign In', async () => {
    await page.getByRole("link", { name: "Sign In", exact: true }).click();
  })

  await test.step('Fill the Sign in details', async () => {
    await page.getByRole("textbox", { name: "you@example.com" }).click();
    await page
      .getByRole("textbox", { name: "you@example.com" })
      .fill("saleh@gmail.com");
    await page.getByRole("textbox", { name: "you@example.com" }).press("Tab");
    await page.getByRole("textbox", { name: "••••••••" }).click();
    await page.getByRole("textbox", { name: "••••••••" }).fill("Saleh@2025");
  })

  await test.step('Submit the details', async () => {
    await page.getByRole("button", { name: "Sign In" }).click();
  })

  await test.step('Redirect to home', async () => {
    expect("https://thecodedsa.live")
  })
});