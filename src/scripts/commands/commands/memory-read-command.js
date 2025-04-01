export class MemoryReadCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryRead();
  }
}
