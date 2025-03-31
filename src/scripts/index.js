import { Calculator } from "./calculator.js";
import { Invoker } from "./commands/invoker.js";
import { AppendNumberCommand } from "./commands/commands/append-number-command.js";
import { ClearCommand } from "./commands/commands/clear-command.js";
import { ComputeCommand } from "./commands/commands/compute-command.js";
import { OperationCommand } from "./commands/commands/operation-command.js";
import { AppendPointCommand } from "./commands/commands/append-point-command.js";
import "./theme-change.js";

const calculator = new Calculator();
const invoker = new Invoker();

document.querySelectorAll(".calculator-actions__action").forEach(action => {
  action.addEventListener("click", () => {
    const actionType = action.id;
    const actionValue = action.textContent;

    switch (actionType) {
      case "clear":
        invoker.executeCommand(new ClearCommand(calculator));
        break;
      case "equal":
        invoker.executeCommand(new ComputeCommand(calculator));
        break;
      case "point":
        invoker.executeCommand(new AppendPointCommand(calculator));
        break;
      default:
        if (!isNaN(actionValue)) {
          invoker.executeCommand(
            new AppendNumberCommand(calculator, actionValue),
          );
        } else {
          invoker.executeCommand(new OperationCommand(calculator, actionType));
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
