document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("calculatorWide");
  const additionalActions = document.querySelector(
    ".calculator-actions_additional",
  );

  if (toggleButton && additionalActions) {
    toggleButton.addEventListener("click", () => {
      additionalActions.classList.toggle("visible");
    });
  }
});
