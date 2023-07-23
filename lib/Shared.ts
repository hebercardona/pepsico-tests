export class Shared {

    static getAmount(price: string): number {
        const amount = price.replace(/,/g, '').split('$')[1].trim();
        return +parseFloat(amount).toFixed(2);
    }

    static getAny<T>(array: T[]): T {
        const item = array[Math.floor(Math.random()*array.length)];
        return item;
    }
}