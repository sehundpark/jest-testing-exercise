import reverseString from "./reverseString";

test("reverse a single word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse a sentence", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverse an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverse a string with punctuation", () => {
  expect(reverseString("hello!")).toBe("!olleh");
});
