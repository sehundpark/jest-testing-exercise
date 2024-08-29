import capitalizeFirstLetter from "./capitalizeFirstChar";

test("capitalize first letter of a single word", () => {
  expect(capitalizeFirstLetter("hello")).toBe("Hello");
});

test("capitalize first letter of a sentence", () => {
  expect(capitalizeFirstLetter("this is a test")).toBe("This is a test");
});

test("capitalize first letter of an already capitalized word", () => {
  expect(capitalizeFirstLetter("Hello")).toBe("Hello");
});

test("capitalize an empty string", () => {
  expect(capitalizeFirstLetter("")).toBe("");
});
