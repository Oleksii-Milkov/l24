import { Water } from "./water";
import { Coffee } from "./coffee";
import { Milk } from "./milk";

export class CoffeeMachine {
    constructor() {
        this.water = new Water();
        this.coffee = new Coffee();
        this.milk = new Milk();
    }

    coffeeArray = [
        {
            name: "Espresso",
            requiredWater: 80,
            requiredCoffe: 30,
            requiredMilk: 0
        },
        {
            name: "Latte",
            requiredWater: 250,
            requiredCoffe: 20,
            requiredMilk: 30
        },
        {
            name: "Americano",
            requiredWater: 130,
            requiredCoffe: 50,
            requiredMilk: 10
        }
    ];

    makecoffee(coffeeName) {
        for (let i = 0; i < this.coffeeArray.length; i++) {
            if (this.coffeeArray[i].name === coffeeName) {
                let arrayIndex = i;
                return this.checkProducts(arrayIndex) ? alert("Готово") : alert("Нет продуктов");
            }
        }
    }

    checkProducts(arrayIndex) {
        if (this.coffee.countCoffee() >= this.coffeeArray[arrayIndex].requiredCoffe &&
            this.water.countWater() >= this.coffeeArray[arrayIndex].requiredWater &&
            this.milk.countMilk() >= this.coffeeArray[arrayIndex].requiredMilk) {
            return true;
        }
    }
}