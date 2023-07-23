import { Locator, Page } from "@playwright/test";

export class Header {
    private readonly page: Page;
    private readonly RS_WHATS_NEXT: Locator;
    private readonly RS_PRODUCTS: Locator;
    private readonly RS_CART: Locator;
    private readonly RS_ACCOUNT: Locator;
    private readonly RS_HAMBURGER_MENU: Locator;
    private readonly RS_HOME_ICON: Locator;

    constructor(page: Page) {
        this.page = page;
        this.RS_WHATS_NEXT = this.page.getByRole('link', { name: 'What’s Next' });
        this.RS_PRODUCTS = this.page.getByRole('link', { name: 'Products'});
        this.RS_CART = this.page.getByRole('link', { name: 'cart'});
        this.RS_ACCOUNT = this.page.getByRole('link', { name: 'sign-in'});
        this.RS_HAMBURGER_MENU = this.page.getByLabel('Primary Menu', {exact: true});
        this.RS_HOME_ICON = this.page.locator('header a img');
    }

    async clickRockstarWhatsNext(): Promise<void> {
        await this.RS_WHATS_NEXT.click();
    }

    async clickRockstarProducts(): Promise<void> {
        await this.RS_PRODUCTS.click();
    }

    async clickRockstarCart(): Promise<void> {
        await this.RS_CART.click();
    }

    async clickRockstarAccount(): Promise<void> {
        await this.RS_ACCOUNT.click();
    }

    async clickRockstarHamburgerMenu(): Promise<void> {
        await this.RS_HAMBURGER_MENU.click();
    }

    async clickRockStarHomeIcon(): Promise<void> {
        await this.RS_HOME_ICON.click();
    }
}