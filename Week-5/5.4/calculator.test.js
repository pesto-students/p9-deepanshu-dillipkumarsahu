const mathOperations = require("./calculator");

test("calculate add, diff, production correctly", () => {
  expect(mathOperations.sum(1, 2)).toBe(3); // for sum
  expect(mathOperations.diff(4, 2)).toBe(2); // for difference
  expect(mathOperations.product(1, 2)).toBe(2); // for product
});
