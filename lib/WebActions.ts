import { Page } from "@playwright/test";

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).waitFor({state: "visible"});
        await this.page.click(locator);
    }

    async fill(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }
}

