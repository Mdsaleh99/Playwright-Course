import { test, expect } from "@playwright/test";

test("Handling Iframes drag and drop element in playwright", async ({ page }) => {
    await page.goto("https://jqueryui.com/droppable/");

    const iframe = page.frameLocator('.demo-frame');
    
    // drag element, drop element
    const dragElement = iframe.locator('#draggable')
    const dropElement = iframe.locator('#droppable')

    await dragElement.dragTo(dropElement)

});
