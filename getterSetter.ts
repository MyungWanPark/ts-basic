class Person {
  constructor(private _age: number) {}

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}
