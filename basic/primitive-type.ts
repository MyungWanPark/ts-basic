{
  let num: number = 3;
  console.log(num);

  let person: string | undefined = 'hello';
  console.log(person);

  function helloWorld(): never {
    throw new Error('error happends');
  }

  let obj: object = {
    name: 'hello',
  };
  // helloWorld();

  function fetchSomething(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('hello');
    });
  }

  function defaultFunc(a: string = 'message', b?: string): void {
    console.log(a);
    console.log(b);
  }

  function addNum(...numbers: number[]): number {
    return numbers.reduce((prev, curr) => prev + curr, 100);
  }

  console.log(addNum(1, 2, 3));
  console.log(addNum(1, 2));
  console.log(addNum(1, 2, 3, 4, 5));

  const a: number[] = [1, 2, 3];
  const b: Array<number> = [1, 2, 3];

  const tuple1: [number, string] = [1, '2']; // useState 와 같은 dynamic 할당. 최대한 interface, type alias 를 쓰기

  type Student = {
    name: string;
    age: number;
  };

  const studentData: Student = {
    age: 1,
    name: 'park',
  };

  type Foods = 'banana';
  const fruit1: Foods = 'banana';

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailureState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailureState;

  function login(loginState: LoginState): void {
    if (loginState.result === 'success') {
      console.log('success');
      return;
    }
    if (loginState.result === 'fail') {
      console.log('fail');
      return;
    }
  }

  type Obj1 = {
    name: string;
  };

  const obj1: Obj1 = {
    name: 'park',
  };

  if ('name' in obj1) {
    console.log('key is here!');
  }

  login({
    result: 'fail',
    reason: 'network error',
  });

  type UnivStudent = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: string;
    work: () => void;
  };

  function work(person: UnivStudent & Worker) {
    console.log(person.employeeId, person.work(), person.score);
  }

  work({
    name: 'park',
    score: 100,
    employeeId: '123',
    work: () => {},
  });

  const days = Object.freeze({
    Monday: 'mon',
    Tuesday: 'tu',
    Wednesday: 'wed',
  });

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
  }

  type DaysOfWeek = 'Mon' | 'Tuesday' | 'Wednesday';
  let day: DaysOfWeek = 'Mon';
  let date: Days = 10;

  let text1 = 'hello';

  function add(a: number, b: number): number {
    return a + b;
  }
  let result = add(1, 2);

  function findNumber(): Array<number> | undefined {
    return undefined;
  }

  let numArr = findNumber()!.length;

  type Options = 'open' | 'close';
  const select: Options = 'close';
}
