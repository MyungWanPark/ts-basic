{
  interface Employee {
    work: () => string;
  }

  class FullTime implements Employee {
    work(): string {
      console.log('Fulltime working 중....');
      return '100달러';
    }

    eatExpensiveFood() {
      console.log('eat expensive food..');
    }
  }

  class PartTime implements Employee {
    work(): string {
      console.log('PartTime working 중....');
      return '50달러';
    }

    eatCheapFood() {
      console.log('eat cheap food..');
    }
  }

  function forceWork<T extends Employee>(employee: T): T {
    employee.work();
    return employee;
  }

  const kim = new FullTime();
  const lee = new PartTime();

  kim.work();
  lee.work();

  const afterForceKim = forceWork(kim);
  const afterForceLee = forceWork(lee);

  afterForceKim.eatExpensiveFood();
  afterForceLee.eatCheapFood();
}
