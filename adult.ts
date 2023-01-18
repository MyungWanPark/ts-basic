{
  /**
   * 1. 성인, 2. 직업은 분리.
   */

  type LeftFromWork = {
    earnMoney: number;
    stress: number;
  };

  type HappyPoint = {
    lostMoney: number;
    happiness: number;
  };

  interface Work {
    work(time: number): LeftFromWork;
  }

  interface Play {
    play(cost: number): HappyPoint;
  }

  interface WorkManager {
    helpWork(lobby: number, requiredTime: number): number;
  }

  class SuperiorPark implements WorkManager {
    constructor(private account: number, private idleTime: number) {}
    helpWork(lobby: number, requiredTime: number): number {
      const helpAmount = 50;
      this.account += lobby;
      this.idleTime -= requiredTime;
      return helpAmount;
    }
  }

  class SuperiorLee implements WorkManager {
    constructor(private account: number, private idleTime: number) {}
    helpWork(lobby: number, requiredTime: number): number {
      const helpAmount = 20;
      this.account += lobby;
      this.idleTime -= requiredTime;
      return helpAmount;
    }
  }

  class Boss implements WorkManager {
    constructor(private account: number, private idleTime: number) {}
    helpWork(lobby: number, requiredTime: number): number {
      const helpAmount = 100;
      this.account += lobby;
      this.idleTime -= requiredTime;
      return helpAmount;
    }
  }

  interface Teacher {
    teach(money: number, requiredTime: number): string;
  }

  class TennisTeacher implements Teacher {
    constructor(private account: number, private idleTime: number) {}

    teach(money: number, requiredTime: number): string {
      this.account += money;
      this.idleTime -= requiredTime;
      return 'tennis ability';
    }
  }

  class FootballTeacher implements Teacher {
    constructor(private account: number, private idleTime: number) {}

    teach(money: number, requiredTime: number): string {
      this.account += money;
      this.idleTime -= requiredTime;
      return 'Football ability';
    }
  }

  class SwimmingTeacher implements Teacher {
    constructor(private account: number, private idleTime: number) {}

    teach(money: number, requiredTime: number): string {
      this.account += money;
      this.idleTime -= requiredTime;
      return 'Swimming ability';
    }
  }

  abstract class Adult {
    constructor(
      protected age: number,
      protected name: string,
      protected address: string
    ) {}

    protected abstract prepare(time: number): void;

    eat(food: string) {
      console.log(`eating ${food}...`);
    }

    sleep(hours: string) {
      console.log(`sleeping ${hours} hours`);
    }
  }

  class SocityAdult extends Adult implements Work, Play {
    constructor(
      protected age: number,
      protected name: string,
      protected address: string,
      private budget: number,
      private stress: number,
      private manager: WorkManager,
      private teacher: Teacher,
      private hobbyList: string[]
    ) {
      super(age, name, address);
    }

    prepare(time: number): void {
      console.log(`prepare during ${time / 2} minutes`);
    }

    work(time: number): { earnMoney: number; stress: number } {
      this.manager.helpWork(this.budget, 60);
      return {
        earnMoney: 100 - this.budget,
        stress: this.stress + 60,
      };
    }

    play(cost: number): { lostMoney: number; happiness: number } {
      const newHobby = this.teacher.teach(cost, 100);
      this.hobbyList.push(newHobby);
      return {
        lostMoney: cost,
        happiness: 100,
      };
    }
  }

  const personA = new SocityAdult(
    20,
    'park',
    'seoul',
    100,
    30,
    new SuperiorLee(50, 100),
    new TennisTeacher(100, 500),
    ['baseball']
  );

  personA.work(100);
  personA.play(1000);

  const personB = new SocityAdult(
    30,
    'Lee',
    'seoul',
    100,
    30,
    new SuperiorPark(50, 100),
    new FootballTeacher(100, 500),
    ['swimming']
  );

  const personC = new SocityAdult(
    50,
    'Lee',
    'Gyeunggi',
    100,
    30,
    new SuperiorPark(50, 100),
    new SwimmingTeacher(100, 500),
    ['BasketBall']
  );
}
