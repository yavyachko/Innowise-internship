import { BasicOperations } from "./BasicOperations";
import { test, expect } from "@jest/globals";

test("должен правильно складывать два числа", () => {
  expect(BasicOperations.sum(2, 3)).toBe(5);
  expect(BasicOperations.sum(-1, 1)).toBe(0);
  expect(BasicOperations.sum(-1, -1)).toBe(-2);
});

test("должен правильно вычитать два числа", () => {
  expect(BasicOperations.minus(5, 3)).toBe(2);
  expect(BasicOperations.minus(0, 1)).toBe(-1);
  expect(BasicOperations.minus(-1, -1)).toBe(0);
});

test("должен правильно умножать два числа", () => {
  expect(BasicOperations.multiplication(2, 3)).toBe(6);
  expect(BasicOperations.multiplication(-2, 3)).toBe(-6);
  expect(BasicOperations.multiplication(0, 5)).toBe(0);
});

test("должен правильно делить два числа", () => {
  expect(BasicOperations.division(6, 3)).toBe(2);
  expect(BasicOperations.division(-6, 3)).toBe(-2);
  expect(() => BasicOperations.division(5, 0)).toThrow(
    "Division by zero is not allowed!",
  );
});

test("должен правильно возводить в квадрат", () => {
  expect(BasicOperations.square(3)).toBe(9);
  expect(BasicOperations.square(-3)).toBe(9);
  expect(BasicOperations.square(0)).toBe(0);
});

test("должен правильно возводить в куб", () => {
  expect(BasicOperations.cube(2)).toBe(8);
  expect(BasicOperations.cube(-2)).toBe(-8);
  expect(BasicOperations.cube(0)).toBe(0);
});

test("должен правильно возводить в степень", () => {
  expect(BasicOperations.power(2, 3)).toBe(8);
  expect(BasicOperations.power(5, 0)).toBe(1);
  expect(BasicOperations.power(2, -2)).toBe(0.25);
});

test("должен правильно вычислять степень десяти", () => {
  expect(BasicOperations.powerOfTen(2)).toBe(100);
  expect(BasicOperations.powerOfTen(0)).toBe(1);
  expect(BasicOperations.powerOfTen(-1)).toBe(0.1);
});

test("должен правильно вычислять обратное значение", () => {
  expect(BasicOperations.reciprocal(2)).toBe(0.5);
  expect(BasicOperations.reciprocal(-4)).toBe(-0.25);
  expect(() => BasicOperations.reciprocal(0)).toThrow(
    "Division by zero is not allowed!",
  );
});

test("должен правильно вычислять квадратный корень", () => {
  expect(BasicOperations.squareRoot(9)).toBe(3);
  expect(BasicOperations.squareRoot(0)).toBe(0);
  expect(() => BasicOperations.squareRoot(-1)).toThrow(
    "Square root of a negative number is not allowed!",
  );
});

test("должен правильно вычислять кубический корень", () => {
  expect(BasicOperations.cubeRoot(8)).toBe(2);
  expect(BasicOperations.cubeRoot(-8)).toBe(-2);
  expect(BasicOperations.cubeRoot(0)).toBe(0);
});

test("должен правильно вычислять корень n-й степени", () => {
  expect(BasicOperations.nthRoot(27, 3)).toBe(3);
  expect(BasicOperations.nthRoot(16, 4)).toBe(2);
  expect(() => BasicOperations.nthRoot(-16, 2)).toThrow(
    "Even root of a negative number is not allowed!",
  );
  expect(BasicOperations.nthRoot(-27, 3)).toBe(-3);
  expect(() => BasicOperations.nthRoot(8, -3)).toThrow(
    "Non-positive root is not allowed!",
  );
});

test("должен правильно вычислять процент", () => {
  expect(BasicOperations.percent(50)).toBe(0.5);
  expect(BasicOperations.percent(0)).toBe(0);
  expect(BasicOperations.percent(-100)).toBe(-1);
});

test("должен правильно вычислять факториал", () => {
  expect(BasicOperations.factorial(5)).toBe(120);
  expect(BasicOperations.factorial(0)).toBe(1);
  expect(() => BasicOperations.factorial(-1)).toThrow(
    "Factorial is only defined for non-negative integers!",
  );
  expect(() => BasicOperations.factorial(1.5)).toThrow(
    "Factorial is only defined for non-negative integers!",
  );
});
