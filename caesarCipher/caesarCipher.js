const shiftChar = (char, shiftFactor) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = lowercase;
  let index = -1;

  for (let i = 0; i < 26; i++) {
    if (char === lowercase[i] || char === uppercase[i]) {
      index = i;
      if (char === uppercase[i]) {
        alphabet = uppercase;
      }
      break;
    }
  }

  if (index === -1) {
    return char; // Non-alphabetic character, return unchanged
  }

  index = (index + shiftFactor + 26) % 26;
  return alphabet[index];
};

// Main Caesar Cipher function
const caesarCipher = (string, shiftFactor) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += shiftChar(string[i], shiftFactor);
  }
  return result;
};

module.exports = caesarCipher;
