import caesarCipher from "./caesarCipher";

test("shifts a simple string by 3", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ignores punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
