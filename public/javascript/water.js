export class Water {
    constructor(count = 3000) {
        this.count = count;
    }
    get countWater() {
        return this.count;
    }
    set countWater(quant) {
        this.count =+ quant;
    }
}
