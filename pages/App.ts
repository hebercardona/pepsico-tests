import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { Header } from "./Header";
import { SignIn } from "./SignIn";

export class App {
    readonly page: Page;
    readonly home: HomePage;
    readonly header: Header;
    readonly signIn: SignIn;

    constructor(page: Page) {
        this.page = page;
        this.home = new HomePage(this.page);
        this.header = new Header(this.page);
        this.signIn = new SignIn(this.page);
    }
}