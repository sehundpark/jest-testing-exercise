import Calculator from "./calculator";

test("adds two numbers", () => {
  const calculator = new Calculator(2, 3);
  expect(calculator.add()).toBe(5);
});

test("subtracts two numbers", () => {
  const calculator = new Calculator(5, 3);
  expect(calculator.subtract()).toBe(2);
});

test("multiplies two numbers", () => {
  const calculator = new Calculator(4, 3);
  expect(calculator.multiply()).toBe(12);
});

test("divides two numbers", () => {
  const calculator = new Calculator(10, 2);
  expect(calculator.divide()).toBe(5);
});

test("divides by zero", () => {
  const calculator = new Calculator(10, 0);
  expect(calculator.divide()).toBe(Infinity); // or handle error
});
