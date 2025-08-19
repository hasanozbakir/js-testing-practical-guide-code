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
