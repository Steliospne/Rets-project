import probability from "./probability";
export default class Spinner {
  static #labels = [
    "Bonus Donut",
    "X",
    "Spin Again",
    "2x Bonus Donut",
    "X",
    "Spin Again",
  ];
  static #numberOfSlices = 6;
  // Generates the spinner.
  static generate(
    numberOfSlices = this.#numberOfSlices,
    labels = this.#labels
  ) {
    // generate elements and innerHTML
    const spinner = document.createElement("div");
    spinner.classList.add("container");
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
      // Calls probability and spinAnimation function upon click.
      let [rotation, spinAgain] = probability();
      Spinner.addSpinAnimation(rotation);
      dial.classList.add("spinning");
      if (!spinAgain) {
        spinButton.style.pointerEvents = "none";
      } else {
        setTimeout(() => {
          dial.classList.remove("spinning");
        }, 5200);
      }
    });
    document.body.appendChild(spinner);
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
}
