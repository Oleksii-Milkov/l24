export class Coffee {
    constructor(count = 300) {
        this.count = count;
    }
    get countCoffee() {
        return this.count;
    }
    set countCoffee(quant) {
        this.count = quant;
    }
}