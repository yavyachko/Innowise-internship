import { Calculator } from "./calculator.js";
import "./theme-change.js";
import "../index.css";

const calculator = new Calculator();
calculator.init();

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");

  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
});
