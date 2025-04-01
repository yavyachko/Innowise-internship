import { BasicOperations } from "./helpers/BasicOperations.js";

export class Calculator {
  constructor() {
    this.currentValue = "0";
    this.previousValue = null;
    this.operation = null;
    this.memory = 0;
    this.display = document.querySelector(".calculator__input");
    this.actions = document.querySelectorAll(".calculator-actions__action");
  }

  memoryClear() {
    this.memory = 0;
  }

  memoryAdd() {
    this.memory += parseFloat(this.currentValue);
  }

  memoryMinus() {
    this.memory -= parseFloat(this.currentValue);
  }

  memoryRead() {
    this.currentValue = this.memory.toString();
    this.updateDisplay();
  }

  appendNumber(number) {
    if (this.currentValue === "0") {
      this.currentValue = number;
    } else {
      this.currentValue += number;
    }
    this.updateDisplay();
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
    this.updateDisplay();
    const historyElement = document.getElementById("history");
    historyElement.textContent = "";
  }

  changeSign() {
    this.currentValue = (parseFloat(this.currentValue) * -1).toString();
    this.updateDisplay();
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

    try {
      switch (this.operation) {
        case "sum":
          result = BasicOperations.sum(prev, current);
          operationSymbol = "+";
          break;
        case "minus":
          result = BasicOperations.minus(prev, current);
          operationSymbol = "-";
          break;
        case "multiplication":
          result = BasicOperations.multiplication(prev, current);
          operationSymbol = "*";
          break;
        case "division":
          result = BasicOperations.division(prev, current);
          operationSymbol = "/";
          break;
        case "square":
          result = BasicOperations.square(prev);
          operationSymbol = "²";
          break;
        case "cube":
          result = BasicOperations.cube(prev);
          operationSymbol = "³";
          break;
        case "power":
          result = BasicOperations.power(prev, current);
          operationSymbol = `^${current}`;
          break;
        case "powerOfTen":
          result = BasicOperations.powerOfTen(prev);
          operationSymbol = "10^x";
          break;
        case "reciprocal":
          result = BasicOperations.reciprocal(prev);
          operationSymbol = "1/x";
          break;
        case "squareRoot":
          result = BasicOperations.squareRoot(prev);
          operationSymbol = "√x";
          break;
        case "cubeRoot":
          result = BasicOperations.cubeRoot(prev);
          operationSymbol = "∛x";
          break;
        case "nthRoot":
          result = BasicOperations.nthRoot(prev, current);
          operationSymbol = `&#8731;${current}`;
          break;
        case "factorial":
          result = BasicOperations.factorial(prev);
          operationSymbol = "!";
          break;
        default:
          return;
      }
    } catch (error) {
      alert(error.message);
      return;
    }

    this.currentValue = result.toString();
    this.previousValue = null;
    this.operation = null;
    const historyElement = document.getElementById("history");

    historyElement.textContent = `${prev} ${operationSymbol} ${current || ""} = ${result}`;
    this.updateDisplay();
  }

  updateDisplay() {
    this.display.value = this.currentValue;
  }
}
