export class Milk {
    constructor(count = 300) {
        this.count = count;
    }
    get countMilk() {
        return this.count;
    }
    set countMilk(quant) {
        this.count = quant;
    }
}