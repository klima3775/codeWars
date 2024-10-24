const longest = require("./twoToOne");

describe("Filtres 2 string in one", () => {
  const testCases = [
    {
      input: ["aretheyhere", "yestheyarehere"],
      expected: "aehrsty",
    },
    {
      input: ["loopingisfunbutdangerous", "lessdangerousthancoding"],
      expected: "abcdefghilnoprstu",
    },
    {
      input: ["inmanylanguages", "theresapairoffunctions"],
      expected: "acefghilmnoprstuy",
    },
  ];
  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} when given ${input}`, () => {
      expect(longest(...input)).toBe(expected);
    });
  });
});
