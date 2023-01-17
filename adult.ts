{
  type ExerciseEffect = {
    fatBurn: string;
    muscleGain: string;
  };

  interface Women {
    makeUp(time: number): void;
  }

  interface Men {
    weightTraining(time: number): ExerciseEffect;
  }

  class Adult implements Women, Men {
    constructor(
      protected age: number,
      protected name: string,
      protected hobbyList: string[]
    ) {}

    makeUp(time: number): void {
      console.log(`make up during ${time} minutes`);
    }

    weightTraining(time: number): { fatBurn: string; muscleGain: string } {
      console.log(`doing exerise during ${time} minutes`);
      return {
        fatBurn: '100 kcal',
        muscleGain: '0.2kg',
      };
    }

    doingHobby() {
      this.hobbyList.forEach((hobby) =>
        console.log(`I'm happy doing ${hobby}`)
      );
    }
  }

  class SocityAdult extends Adult {
    constructor(
      protected age: number,
      protected name: string,
      protected hobbyList: string[],
      private workingTime: number
    ) {
      super(age, name, hobbyList);
    }

    makeUp(time: number): void {
      console.log(`doing make takes ${time / 2} minutes`);
    }

    work() {
      console.log(`i work as ${this.workingTime} hours`);
    }
  }

  const socialAdult = new SocityAdult(30, 'park', ['soccer', 'reading'], 8);
  socialAdult.work();
}
