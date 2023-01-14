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
}
