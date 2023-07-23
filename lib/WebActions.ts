import { Locator, Page } from "@playwright/test";

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(locator: string | Locator): Promise<void> {
        if(typeof(locator) === 'string') {
            await this.page.locator(locator).waitFor({state: 'attached'});
            await this.page.locator(locator).scrollIntoViewIfNeeded();
            await this.page.locator(locator).waitFor({state: 'visible'});
            await this.page.click(locator);
        } else {
            await locator.waitFor({state: 'attached'});
            await locator.scrollIntoViewIfNeeded();
            await locator.waitFor({state: 'visible'});
            await locator.click();
        }
        
    }

    async fill(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }

    async delay(time: number = 2000): Promise<void> {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}

