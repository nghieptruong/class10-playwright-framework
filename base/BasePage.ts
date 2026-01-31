import { Locator, Page } from "@playwright/test";

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async input(locator: Locator,value: string): Promise<void> {
        await locator.fill(value);
    }

    async click(locator: Locator): Promise<void> {
        await locator.click()
    }

    
}