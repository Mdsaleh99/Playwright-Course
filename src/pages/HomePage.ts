import { Locator, Page } from "@playwright/test";

/*
    What Is Page Object Model (POM)?
    Page Object Model is a design pattern used in test automation to make your tests cleaner, reusable, and maintainable.

    It works by:
        Creating separate classes for each page or component in your application.
        Defining page locators and actions (methods) inside those classes.
        Keeping test files focused on test logic, not low-level selectors.

*/

export class HomePage {
    readonly page: Page
    readonly searchTextbox: Locator

    constructor(page: Page) {
        this.page = page // this is test file

        // Elements
        this.searchTextbox = page.locator("#APjFqb");
    }

    // Methods
    async goToURL() {
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.GOOGLE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.GOOGLE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
    }

    async searchWithKeywords(keyword: string) {
        await this.searchTextbox.click();
        await this.searchTextbox.fill(keyword);
        await this.searchTextbox.press('Enter');
    }
}