import analyzeArray from "./analyzeArray";

test("analyzes a simple array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("analyzes an array with negative numbers", () => {
  expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 5,
  });
});

test("analyzes an array with one number", () => {
  expect(analyzeArray([4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 1,
  });
});

test("analyzes an empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: NaN,
    max: NaN,
    length: 0,
  });
});
