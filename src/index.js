import "./style.css";
import Spinner from "./spinner.js";
Spinner.generate();
window.onbeforeunload = confirmExit;
function confirmExit() {
  if (dialog.value !== "end") {
    return "You have attempted to leave this page. Are you sure?";
  }
}
const dialog = document.querySelector("dialog");
const dialogCancelButton = document.querySelector("#cancel");
const dialogContinueButton = document.querySelector("#confirmBtn");
dialogCancelButton.addEventListener("click", () => {
  dialog.close();
});

dialogContinueButton.addEventListener("click", doStuff);

function doStuff() {
  dialog.close();
  if (dialog.value === "Spin Again") return;
  dialogContinueButton.parentElement.href = "https://localhost:8080/form.html";
}
