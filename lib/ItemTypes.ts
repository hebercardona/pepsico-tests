import { Locator } from "@playwright/test"

export type ROCKSTAR_PRODUCT = {
    title: string,
    flavor: string,
    price: number,
    img: Locator
}