{
  type CoffeeCup = {
    cups: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static GRAMS_NEEDED_PER_SHOT = 18;
    coffee_powder: number;

    constructor(coffee_powder: number) {
      this.coffee_powder = coffee_powder;
    }

    static makeMachine(coffee_powder: number): CoffeeMaker {
      return new CoffeeMaker(coffee_powder);
    }

    makeCoffee(coffee_powder: number): CoffeeCup {
      let coffee_cup: number =
        coffee_powder / CoffeeMaker.GRAMS_NEEDED_PER_SHOT;

      return {
        cups: coffee_cup,
        hasMilk: false,
      };
    }
  }
  const coffeeMaker: CoffeeMaker = new CoffeeMaker(50);
  const coffeeMaker2 = CoffeeMaker.makeMachine(40);
  console.log(coffeeMaker2);
}
