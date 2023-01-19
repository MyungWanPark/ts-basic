class Animal {}

class Bird extends Animal {
  isBird: boolean = true;
}

class Cat extends Animal {
  isCat: boolean = true;
}

const animals: Animal[] = [new Bird(), new Bird(), new Bird()];

function isBird(
  animal: Animal,
  index: number,
  array: Animal[]
): animal is Bird {
  return (animal as Bird).isBird !== undefined;
}

// console.log(isBird(new Animal(), 0, animals));

console.log(animals.every<Bird>(isBird));
