import { App } from '@pages/App';
import { test as baseTest, expect } from '@playwright/test';
import { testConfig } from '@testConfig';

export const test = baseTest.extend<{
    app: App;
}>({
    app: async ({ browser }, use) => {
        const context = await browser.newContext({storageState: './mocks/auth/cf_sessionStorage.json'});
        for (const tenant of Object.values(testConfig.web_urls)) {
            await context.addCookies([{name: 'newsletter-cookie', value: 'false', url: tenant}]);   
        }
        const page = await context.newPage();
        await use(new App(page));
    }
});


export { expect } from '@playwright/test';