import { Locator, Page } from "@playwright/test";
import { testConfig } from "@testConfig";

export class SignIn {
    private readonly page: Page;
    private readonly EMAIL: Locator;
    private readonly PASSWORD: Locator;
    private readonly LOGIN_BTN: Locator;

    constructor(page: Page) {
        this.page = page;
        this.EMAIL = this.page.getByLabel('Email Address');
        this.PASSWORD = this.page.getByLabel('Password');
        this.LOGIN_BTN = this.page.locator(`button[type='submit']`);
    }

    async enterEmail(email: string): Promise<void> {
        await this.EMAIL.fill(email);
        await this.EMAIL.blur();
    }

    async enterPassword(password: string): Promise<void> {
        await this.PASSWORD.fill(password);
        await this.PASSWORD.blur();
    }

    async clickLoginBtn(): Promise<void> {
        await this.LOGIN_BTN.click();
    }

    async loginAsAlice(): Promise<void> {
        await this.enterEmail(testConfig.login_credentials.alice.email);
        await this.enterPassword(testConfig.login_credentials.alice.password);
        await this.clickLoginBtn();
    }
}