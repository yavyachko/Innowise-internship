export class Invoker {
  constructor() {
    this.history = [];
  }

  executeCommand(command) {
    command.execute();
    this.history.push(command);
  }

  undoLastCommand() {
    const lastCommand = this.history.pop();
    if (lastCommand && lastCommand.undo) {
      lastCommand.undo();
    }
  }
}
