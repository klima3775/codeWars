const towerBuilder = require("./tower");

describe("Tower build", () => {
  tesCases = [
    { input: 1, expected: ["*"] },
    { input: 2, expected: [" * ", "***"] },
    { input: 3, expected: ["  *  ", " *** ", "*****"] },
    { input: 4, expected: ["   *   ", "  ***  ", " ***** ", "*******"] },
    {
      input: 5,
      expected: [
        "    *    ",
        "   ***   ",
        "  *****  ",
        " ******* ",
        "*********",
      ],
    },
    {
      input: 6,
      expected: [
        "     *     ",
        "    ***    ",
        "   *****   ",
        "  *******  ",
        " ********* ",
        "***********",
      ],
    },
  ];
  tesCases.forEach(({ input, expected }) => {
    it(`should return ${expected} when given ${input}`, () => {
      expect(towerBuilder(input)).toEqual(expected);
    });
  });
});
