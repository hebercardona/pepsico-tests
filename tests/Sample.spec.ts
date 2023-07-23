import { test, expect } from "@baseTest";


test.only('Sample Test', async( { app } ) => {
    await test.step('Navigate to Rockstar Home page', async() => {
        await app.home.navigateToRockStarHomePage();
        //await app.page.context().storageState({path: './mocks/auth/cf_sessionStorage.json'});
    });
    await test.step('Click Account Icon', async() => {
        await app.header.clickRockstarAccount();
    });
    await test.step('Login with Alice user', async() => {
        await app.signIn.loginAsAlice();
    });
    await test.step('Assert dashboard acocunt url', async() => {
        await expect(app.page).toHaveURL(/dashboard\/account/);
    });
    await test.step('Click Rockstar products and click any product', async() => {
        await app.header.clickRockStarHomeIcon();
        await app.header.clickRockstarProducts();
        await app.home.clickRockStarHideUnavailableProducts();
        const product = await app.home.getAnyRockStarProduct();
        await app.home.clickRockstarProductImg(product);
    });
    await test.step('Add product to cart and go to cart', async() => {
        await app.home.clickProductPlusQtyIcon(4);
        await app.home.clickRockStarAddToCart();
        await app.header.clickRockstarCart();
    });
});