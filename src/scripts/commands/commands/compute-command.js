export class ComputeCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.compute();
  }
}
