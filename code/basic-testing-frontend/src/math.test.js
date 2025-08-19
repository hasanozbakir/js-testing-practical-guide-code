import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values inn an array", () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedValue = numbers.reduce((prev, curr) => prev + curr, 0);
  expect(result).toBe(expectedValue);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const numbers = ["invalid", 1];

  const result = add(numbers);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values are provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedValue = numbers.reduce((prev, curr) => +prev + +curr, 0);
  expect(result).toBe(expectedValue);
});
