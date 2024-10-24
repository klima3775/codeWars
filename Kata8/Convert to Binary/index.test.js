const binaryToDecimal = require("./index");

describe("Binary to Decimal Conversion Tests", () => {
  const testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 10 },
    { input: 3, expected: 11 },
    { input: 5, expected: 101 },
    { input: 10, expected: 1010 },
    { input: 15, expected: 1111 },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should convert ${input} to ${expected}`, () => {
      expect(binaryToDecimal(input)).toBe(expected);
    });
  });
});
