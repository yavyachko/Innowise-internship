export class ChangeSignCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.changeSign();
  }
}
