import { App } from '@pages/App';
import { test as baseTest, expect } from '@playwright/test';

export const test = baseTest.extend<{
    app: App;
}>({
    app: async ({ browser }, use) => {
        const context = await browser.newContext({storageState: './mocks/auth/cf_sessionStorage.json'});
        const page = await context.newPage();
        await use(new App(page));
    }
});


export { expect } from '@playwright/test';