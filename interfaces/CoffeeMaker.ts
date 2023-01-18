{
  type CoffeeCup = {
    cups: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static GRAMS_NEEDED_PER_SHOT = 18;
    private coffee_powder: number = 0;

    static makeMachine(): CoffeeMaker {
      return new CoffeeMaker();
    }

    public fillCoffee(beans: number): void {
      if (beans < 0) {
        throw new Error('beans must be over zero');
      }
      this.coffee_powder = beans;
    }

    makeCoffee(): CoffeeCup {
      let coffee_cup: number =
        this.coffee_powder / CoffeeMaker.GRAMS_NEEDED_PER_SHOT;

      return {
        cups: coffee_cup,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeeMaker.makeMachine();
  // maker.fillCoffee(-1);
  // console.log(maker.makeCoffee());

  class User {
    private userAge: number = 0;

    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    set age(age: number) {
      this.userAge = age;
    }

    get age(): number {
      return this.userAge;
    }
  }
  const user1 = new User('park', 'myungwan');
  console.log(user1.fullName);
  console.log(user1.age);
  user1.age = 5;
  console.log(user1.age);
}
