export class MemoryMinusCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryMinus();
  }
}
