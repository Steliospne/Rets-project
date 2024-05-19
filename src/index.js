import "./style.css";
import Spinner from "./spinner.js";
import Form from "./form.js";
Spinner.generate();

const dialog = document.querySelector("dialog");
const dialogCancelButton = document.querySelector("#cancel");
const dialogContinueButton = document.querySelector("#confirmBtn");
dialogCancelButton.addEventListener("click", () => {
  dialog.close();
});

dialogContinueButton.addEventListener("click", doStuff);

function doStuff() {
  // If it isnt spin again, you could then generate the form.
  dialog.close();
  if (dialog.value === "Spin Again") return;
  else {
    document.body.innerHTML = "";
    Form.create();
  }
}
