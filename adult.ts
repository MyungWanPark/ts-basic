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
      console.log(`make up during ${time / 2} minutes`);
    }

    work() {
      console.log(`i work as ${this.workingTime} hours`);
    }
  }

  class RetiredAdult extends Adult {
    doingHobby(): void {
      super.doingHobby();
      console.log('also happy doing hobby with retired friends');
    }

    makeUp(time: number): void {
      console.log(`make up during ${time / 100} minutes`);
    }
  }
  const socialAdult = new SocityAdult(30, 'park', ['soccer', 'reading'], 8);
  const adults: Adult[] = [
    new Adult(20, 'kim', ['drinking', 'playing']),
    new SocityAdult(40, 'park', ['golf', 'tennis'], 8),
    new RetiredAdult(70, 'lee', ['gateBall', 'talk']),
  ];
  adults.forEach((adult) => {
    console.log('-------------------------------------------');
    adult.doingHobby();
  });
}
