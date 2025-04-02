import { Calculator } from "./calculator.js";
import { Invoker } from "./commands/invoker.js";
import * as Commands from "./commands/commands/index.js";

import "./utils/theme-change.js";
import "./utils/toggleCalculator.js";

const calculator = new Calculator();
const invoker = new Invoker();

document.querySelectorAll(".calculator-actions__action").forEach(action => {
  action.addEventListener("click", () => {
    const actionType = action.id;
    const actionValue = action.textContent;

    switch (actionType) {
      case "clear":
        invoker.executeCommand(new Commands.ClearCommand(calculator));
        break;
      case "equal":
        invoker.executeCommand(new Commands.ComputeCommand(calculator));
        break;
      case "point":
        invoker.executeCommand(new Commands.AppendPointCommand(calculator));
        break;
      case "changeSign":
        invoker.executeCommand(new Commands.ChangeSignCommand(calculator));
        break;
      case "memoryClear":
        invoker.executeCommand(new Commands.MemoryClearCommand(calculator));
        break;
      case "memoryRead":
        invoker.executeCommand(new Commands.MemoryReadCommand(calculator));
        break;
      case "memoryAdd":
        invoker.executeCommand(new Commands.MemoryAddCommand(calculator));
        break;
      case "memoryMinus":
        invoker.executeCommand(new Commands.MemoryMinusCommand(calculator));
        break;
      default:
        if (!isNaN(actionValue)) {
          invoker.executeCommand(
            new Commands.AppendNumberCommand(calculator, actionValue),
          );
        } else {
          invoker.executeCommand(
            new Commands.OperationCommand(calculator, actionType),
          );
        }
        break;
    }
  });
});

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
});
