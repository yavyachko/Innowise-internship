export class OperationCommand {
  constructor(calculator, operation) {
    this.calculator = calculator;
    this.operation = operation;
  }

  execute() {
    const unaryOperations = [
      "square",
      "cube",
      "powerOfTen",
      "reciprocal",
      "squareRoot",
      "cubeRoot",
      "factorial",
      "percent",
    ];
    if (unaryOperations.includes(this.operation)) {
      this.calculator.chooseOperation(this.operation);
      this.calculator.compute();
    } else {
      this.calculator.chooseOperation(this.operation);
    }
  }
}
