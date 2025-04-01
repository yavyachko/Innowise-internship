export class MemoryAddCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryAdd();
  }
}
