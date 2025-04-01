export class MemoryClearCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryClear();
  }
}
