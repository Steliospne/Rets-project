import probability from "./probability";
export default class Spinner {
  static #labels = [
    "2 Donuts",
    "A Hug",
    "Nothing",
    "Donut",
    "Spin Again",
    "Nothing",
    "A Hug",
    "Nothing",
    "Donut",
    "Spin Again",
  ];
  static result;
  static #numberOfSlices = 10;
  // Generates the spinner.
  static generate(
    numberOfSlices = this.#numberOfSlices,
    labels = this.#labels
  ) {
    // generate elements and innerHTML
    const wrapper = document.createElement("div");
    const spinner = document.createElement("div");
    wrapper.classList.add("wrapper");
    spinner.classList.add("spinner-container");
    spinner.innerHTML = `
    <div class="board">
          <div class="spinner-table">
              <div class="dial">
              </div>
          </div>
          <div class="arrow">
              <span class="pointer"></span>
          </div>
      </div>
      
      <div class="content-container">
          <div class="pre">
              <button id="spin">Spin</button>
          </div>
    </div>`;
    const spinButton = spinner.querySelector("#spin");
    const dial = spinner.querySelector(".dial");
    dial.addEventListener("animationend", Spinner.showMessage);
    // Add the appropriate slices and their labels
    while (numberOfSlices !== 0) {
      let slice = document.createElement("div");
      slice.classList.add("slice");
      let sliceLabel = document.createElement("div");
      sliceLabel.classList.add("label");
      sliceLabel.textContent = labels[numberOfSlices - 1];
      slice.appendChild(sliceLabel);
      spinner.getElementsByClassName("dial")[0].appendChild(slice);
      numberOfSlices--;
    }
    // Add the button functionality
    spinButton.addEventListener("click", () => {
      spinButton.style.pointerEvents = "none";
      // Calls probability and spinAnimation function upon click.
      let [rotation, tempRes] = probability();
      Spinner.result = tempRes;
      Spinner.addSpinAnimation(rotation);
      dial.classList.add("spinning");
    });
    document.body.append(wrapper);
    document.querySelector(".wrapper").append(spinner);
  }
  // Adds the animation of the spin upon generation.
  static addSpinAnimation(value) {
    let dynamicStyles = null;
    const body = `
    @keyframes spinning {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(${value}deg);
        }
    }
        `;
    // Add animation stlye dynamically
    if (!dynamicStyles) {
      dynamicStyles = document.createElement("style");
      document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }
  static showMessage() {
    const spinButton = document.querySelector("#spin");
    const dial = document.querySelector(".dial");
    const dialogMessage = document.querySelector("dialog p");

    if (Spinner.result === "Spin Again") {
      dialogMessage.textContent = `You get to spin again!`;
      document.querySelector("dialog").showModal();
      document.querySelector("dialog").value = Spinner.result;
      dial.classList.remove("spinning");
      spinButton.style.pointerEvents = "";
    } else {
      // sets value to end to know that the spins are over
      document.querySelector("dialog").value = "end";
      if (Spinner.result === "Nothing") {
        dialogMessage.textContent = `Unfortunate, better luck next time!`;
      } else {
        dialogMessage.textContent = `Congrats! You got ${Spinner.result}!`;
      }
      document.querySelector("dialog").showModal();
      spinButton.style.pointerEvents = "none";
    }
  }
}
