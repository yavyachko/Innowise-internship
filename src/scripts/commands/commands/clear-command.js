export class ClearCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.clear();
  }
}
