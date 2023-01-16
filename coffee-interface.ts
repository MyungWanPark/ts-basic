{
  /**
   * common: Coffee machine
   * 1. heat
   * 2. grind beans
   * 3. tamp powder
   * 4. extract
   * 5. steam milk
   * 6. clean
   *
   * amateur
   * pro
   */
  type CoffeeCup = {
    cups: number;
    hasMilk: boolean;
  };

  type MilkCup = {
    volumn: number;
    temperature: string;
  };

  interface CoffeeAmateur {
    extract(powder: number): CoffeeCup;
  }

  interface CoffeePro {
    extract(powder: number): CoffeeCup;
    steamMilk(milk: number): MilkCup;
    clean(): void;
  }

  class CoffeeProcess implements CoffeeAmateur, CoffeePro {
    private static GRAMS_NEEDED_PER_SHOT = 18;
    private powder_weight: number = 0;

    static makeProcess(): CoffeeProcess {
      return new CoffeeProcess();
    }

    private heat() {
      console.log('heating machines ...');
    }

    private grindBeans() {
      console.log('grinding machines...');
    }

    private tampPowder() {
      console.log('tamping coffee powder...');
    }

    public extract(powder: number): CoffeeCup {
      this.heat();
      this.grindBeans();
      this.tampPowder();

      console.log('extracting coffee...');
      return {
        cups: powder / CoffeeProcess.GRAMS_NEEDED_PER_SHOT,
        hasMilk: true,
      };
    }

    public steamMilk(milk: number): MilkCup {
      console.log('steaming milk...');
      return {
        volumn: 100,
        temperature: '90도',
      };
    }

    public clean() {
      console.log('cleaning machines...');
    }
  }
  class AmateurBarista {
    constructor(private process: CoffeeAmateur) {}

    public work() {
      this.process.extract(50);
    }
  }

  class ProBarista {
    constructor(private process: CoffeePro) {}

    public work() {
      this.process.extract(100);
      this.process.steamMilk(50);
      this.process.clean();
    }
  }

  const process = CoffeeProcess.makeProcess();
  const amateur = new AmateurBarista(process);
  const pro = new ProBarista(process);

  amateur.work();
  console.log('---------------------------');
  pro.work();
}
