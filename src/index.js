import "./style.css";
import disclaimerWarning from "./disclaimer";
import Spinner from "./spinner.js";
disclaimerWarning();
Spinner.generate();
const code = window.location.href.slice(window.location.href.indexOf("?"));
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
  dialogContinueButton.parentElement.href = `http://localhost:8080/form${code}`;
}
