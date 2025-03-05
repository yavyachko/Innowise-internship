const buttonChange = document.querySelector(".theme-change");
const dialogWindow = document.querySelector("dialog");
const saveButton = document.querySelector("#save-modal");
const cancelButton = document.querySelector("#close-modal");
const form = document.querySelector("form");

const backgroundInput = document.querySelector("#background");
const accentInput = document.querySelector("#accent");
const actionMainInput = document.querySelector("#action-main");
const actionDarkInput = document.querySelector("#action-dark");
const textColorInput = document.querySelector("#color-text");

form.onsubmit = event => {
  event.preventDefault();
};

buttonChange.addEventListener("click", () => {
  backgroundInput.value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-background")
    .trim();
  accentInput.value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-accent")
    .trim();
  actionMainInput.value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-action-main")
    .trim();
  actionDarkInput.value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-action-dark")
    .trim();
  textColorInput.value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-text")
    .trim();

  dialogWindow.showModal();
});

saveButton.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--color-background",
    backgroundInput.value,
  );
  document.documentElement.style.setProperty(
    "--color-accent",
    accentInput.value,
  );
  document.documentElement.style.setProperty(
    "--color-action-main",
    actionMainInput.value,
  );
  document.documentElement.style.setProperty(
    "--color-action-dark",
    actionDarkInput.value,
  );
  document.documentElement.style.setProperty(
    "--color-text",
    textColorInput.value,
  );
  dialogWindow.close();
});

cancelButton.addEventListener("click", () => {
  dialogWindow.close();
});
