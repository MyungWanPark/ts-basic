{
  const obj1 = {
    name: 'kim',
  };

  const obj2 = {
    age: 100,
  };

  const obj3 = {
    hasDinner: false,
    hasLunch: true,
  };

  function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  }

  console.log(getValue(obj1, 'name'));
  console.log(getValue(obj2, 'age'));
  console.log(getValue(obj3, 'hasLunch'));
}
