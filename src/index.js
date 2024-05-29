import "./style.css";
import disclaimerWarning from "./disclaimer";
import Spinner from "./spinner.js";
import backDisabler from "./backDisabler.js";

const dialog = document.querySelector("dialog");
const dialogCancelButton = document.querySelector("#cancel");
const dialogContinueButton = document.querySelector("#confirmBtn");
const code = window.location.href.slice(window.location.href.indexOf("?"));

const baseURL = "http://donuts.rets.gr/";
const baseURLdev = "http://localhost:8080/";

function confirmExit() {
  if (dialog.value !== "end") {
    return "You have attempted to leave this page. Are you sure?";
  }
}

function doStuff() {
  dialog.close();
  if (dialog.value === "Spin Again") return;
  dialogContinueButton.parentElement.href = baseURL + "form" + code;
}

dialogCancelButton.addEventListener("click", () => {
  dialog.close();
});

dialogContinueButton.addEventListener("click", doStuff);
window.onbeforeunload = confirmExit;
backDisabler();
disclaimerWarning();
Spinner.generate();
