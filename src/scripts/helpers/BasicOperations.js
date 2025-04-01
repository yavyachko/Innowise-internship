export class BasicOperations {
  static sum(a, b) {
    return a + b;
  }

  static minus(a, b) {
    return a - b;
  }

  static multiplication(a, b) {
    return a * b;
  }

  static division(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  static square(a) {
    return a ** 2;
  }

  static cube(a) {
    return a ** 3;
  }

  static power(a, b) {
    return a ** b;
  }

  static powerOfTen(a) {
    return 10 ** a;
  }

  static reciprocal(a) {
    if (a === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return 1 / a;
  }

  static squareRoot(a) {
    if (a < 0) {
      throw new Error("Square root of a negative number is not allowed.");
    }
    return a ** 0.5;
  }

  static cubeRoot(a) {
    return a ** (1 / 3);
  }

  static nthRoot(a, n) {
    if (a < 0 && n % 2 === 0) {
      throw new Error("Even root of a negative number is not allowed.");
    }
    return a ** (1 / n);
  }

  static factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("Factorial is only defined for non-negative integers.");
    }
    return n <= 1 ? 1 : n * BasicOperations.factorial(n - 1);
  }
}
