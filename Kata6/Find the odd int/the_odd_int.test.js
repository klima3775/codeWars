// Import the function to test
const findOdd = require("./findTheOddInt"); // Adjust the path accordingly

describe("Example tests", () => {
  const doTest = (a, n) => {
    expect(findOdd(a)).toBe(n);
  };

  test("Example tests", () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1, 1, 2], 2);
    doTest([0, 1, 0, 1, 0], 0);
    doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
  });

  test("Fixed tests", () => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
  });
});
