const descOrder = require("./descendOrder");

describe("Descending  order", () => {
  const testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 111, expected: 111 },
    { input: 15, expected: 51 },
    { input: 1021, expected: 2110 },
    { input: 123456789, expected: 987654321 },
  ];
  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} when given ${input}`, () => {
      expect(descOrder(input)).toBe(expected);
    });
  });
});
