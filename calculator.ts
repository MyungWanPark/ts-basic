/**
 * Let's make a calculator 🧮
 */
type OperationType = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(type: OperationType, num1: number, num2: number): number {
  let result: number = 0;
  if (type === 'add') {
    return num1 + num2;
  }
  if (type === 'substract') {
    return num1 - num2;
  }
  if (type === 'multiply') {
    return num1 * num2;
  }
  if (type === 'divide') {
    return num1 / num2;
  }
  if (type === 'remainder') {
    return num1 % num2;
  }
  throw new Error('Known operation');
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
