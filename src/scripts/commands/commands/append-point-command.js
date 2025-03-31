export class AppendPointCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.appendPoint();
  }
}
