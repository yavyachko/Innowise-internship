export class OperationCommand {
  constructor(calculator, operation) {
    this.calculator = calculator;
    this.operation = operation;
  }

  execute() {
    this.calculator.chooseOperation(this.operation);
  }
}
