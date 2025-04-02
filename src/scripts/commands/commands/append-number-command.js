export class AppendNumberCommand {
  constructor(calculator, number) {
    this.calculator = calculator;
    this.number = number;
  }

  execute() {
    this.calculator.appendNumber(this.number);
  }

  undo() {
    this.calculator.removeLastDigit();
  }
}
