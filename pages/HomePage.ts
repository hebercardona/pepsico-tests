import { Locator, Page } from "@playwright/test";
import { WebActions } from "@lib/WebActions";
import { testConfig } from "../testConfig";
import { ROCKSTAR_PRODUCT } from "@lib/ItemTypes";
import { Shared } from "@lib/Shared";

let webActions: WebActions;

export class HomePage {
    private readonly page: Page;
    private readonly RS_PRODUCT_QTY_PLUS: Locator;
    private readonly RS_PRODUCT_QTY_MINUS: Locator;
    private readonly RS_PRODUCT_QTY_TXT: Locator;
    private readonly RS_PLP_CHECKBOX: Locator;
    private readonly RS_PRODUCTS_CONTAINER: Locator;
    private readonly RS_PRODUCTS: Locator;
    private readonly RS_PRODUCT_TITLE: Locator;
    private readonly RS_PRODUCT_FLAVOR_NAME: Locator;
    private readonly RS_PRODUCT_PRICE: Locator;
    private readonly RS_PRODUCT_IMG: Locator;
    private readonly RS_ADD_TO_CART_BTN : Locator;

    constructor(page: Page) {
        this.page = page;
        this.RS_PRODUCT_QTY_PLUS = this.page.locator('a.plus-btn');
        this.RS_PRODUCT_QTY_MINUS = this.page.locator('a.min-btn');
        this.RS_PRODUCT_QTY_TXT = this.page.locator('div.quantity-field input');
        this.RS_PLP_CHECKBOX = this.page.locator('input.plp-checkbox');
        this.RS_PRODUCTS_CONTAINER = this.page.locator('ul.rockstar-products');
        this.RS_PRODUCTS = this.page.locator('ul.rockstar-products li');
        this.RS_PRODUCT_TITLE = this.page.locator(`a[title='Product']`);
        this.RS_PRODUCT_FLAVOR_NAME = this.page.locator(`span[class^='CollectionItem_productFlavorName']`);
        this.RS_PRODUCT_PRICE = this.page.locator(`span[class^='CollectionItem_productPrice']`);
        this.RS_PRODUCT_IMG = this.page.locator('img');
        this.RS_ADD_TO_CART_BTN = this.page.locator('div.product-buttons button');
        webActions = new WebActions(this.page);
    }

    async navigateToRockStarHomePage(): Promise<void> {
        await this.page.goto(testConfig.web_urls.rockstar);   
    }

    async clickProductPlusQtyIcon(times: number = 1): Promise<void> {
        for (let i = 0; i < times; i++) {
            await webActions.clickElement(this.RS_PRODUCT_QTY_PLUS);
            if(times > 1) {
                await webActions.delay();
            }
        }
    }

    async clickRockStarHideUnavailableProducts(): Promise<void> {
        await webActions.clickElement(this.RS_PLP_CHECKBOX);
    }

    async getRockStarProducts(): Promise<ROCKSTAR_PRODUCT[]> {
        let products: ROCKSTAR_PRODUCT[] = [];
        this.RS_PRODUCTS_CONTAINER.waitFor();
        const productElements = this.RS_PRODUCTS;
        for (let i = 0; i < await productElements.count(); i++) {
            let obj: ROCKSTAR_PRODUCT = {
                title: await productElements.nth(i).locator(this.RS_PRODUCT_TITLE).innerText(),
                flavor: await productElements.nth(i).locator(this.RS_PRODUCT_FLAVOR_NAME).innerText(),
                price: Shared.getAmount(await productElements.nth(i).locator(this.RS_PRODUCT_PRICE).innerText()),
                img: productElements.nth(i).locator(this.RS_PRODUCT_IMG)
            }
            products.push(obj);
        }
        return products;
    }

    async getAnyRockStarProduct(): Promise<ROCKSTAR_PRODUCT> {
        const products = await this.getRockStarProducts();
        const product = Shared.getAny(products);
        return product;
    }

    async clickRockStarAddToCart(): Promise<void> {
        await webActions.clickElement(this.RS_ADD_TO_CART_BTN);
    }

    async clickRockstarProductImg(product: ROCKSTAR_PRODUCT): Promise<void> {
        await webActions.clickElement(product.img);
    }

}