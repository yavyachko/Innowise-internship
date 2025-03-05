export class Calculator {
  constructor() {
    this.currentValue = "0";
    this.previousValue = null;
    this.pendingValue = null;
    this.operation = null;
    this.pendingOperation = null;
    this.display = document.querySelector(".calculator__input");
    this.actions = document.querySelectorAll(".calculator-actions__action");
  }

  init() {
    this.actions.forEach(action => {
      action.addEventListener("click", () => {
        const actionType = action.id;
        const actionValue = action.textContent;

        if (!isNaN(actionValue)) {
          this.appendNumber(actionValue);
        } else if (actionType === "clear") {
          this.clear();
        } else if (actionType === "equal") {
          this.compute();
        } else if (actionType === "point") {
          this.appendPoint();
        } else if (actionType === "change-symbol") {
          this.changeSymbol();
        } else if (actionType === "percent") {
          this.percent();
        } else {
          this.chooseOperation(actionType);
        }

        this.updateDisplay();
      });
    });
  }

  appendNumber(number) {
    if (this.currentValue === "0") {
      this.currentValue = number;
    } else {
      this.currentValue += number;
    }
  }

  appendPoint() {
    if (!this.currentValue.includes(".")) {
      this.currentValue += ".";
    }
  }

  clear() {
    this.currentValue = "0";
    this.previousValue = null;
    this.operation = null;
    const historyElement = document.getElementById("history");
    historyElement.textContent = "";
  }

  changeSymbol() {
    this.currentValue = (parseFloat(this.currentValue) * -1).toString();
  }

  percent() {
    this.currentValue = (parseFloat(this.currentValue) / 100).toString();
  }

  chooseOperation(operation) {
    if (this.currentValue === "") return;

    if (this.previousValue !== null) {
      this.compute();
    }

    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "0";
  }

  compute() {
    if (this.previousValue === null || this.currentValue === "") return;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    let result;
    let operationSymbol;
    switch (this.operation) {
      case "sum":
        result = prev + current;
        operationSymbol = "+";
        break;
      case "minus":
        result = prev - current;
        operationSymbol = "-";
        break;
      case "multiplication":
        result = prev * current;
        operationSymbol = "*";
        break;
      case "division":
        result = prev / current;
        operationSymbol = "/";
        break;
      default:
        return;
    }
    this.currentValue = result.toString();
    this.previousValue = null;
    this.operation = null;
    const historyElement = document.getElementById("history");
    historyElement.textContent = `${prev} ${operationSymbol} ${current} = ${result}`;
  }

  updateDisplay() {
    this.display.value = this.currentValue;
  }
}
