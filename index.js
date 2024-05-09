const labels = [
  "Bonus Donut",
  "X",
  "Spin Again",
  "2x Bonus Donut",
  "X",
  "Spin Again",
];
generateSpinner(6, labels);

const spinButton = document.getElementById("spin");
const dial = document.querySelector(".dial");
const value = 2007; // Testing value
let dynamicStyles = null;

function addAnimation(body) {
  // Add animation stlye dynamically
  if (!dynamicStyles) {
    dynamicStyles = document.createElement("style");
    document.head.appendChild(dynamicStyles);
  }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

function generateSpinner(numberOfSlices, labels) {
  const spinner = document.createElement("div");
  spinner.classList.add("container");
  spinner.innerHTML = `<div class="board">
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
  document.body.appendChild(spinner);
}

spinButton.addEventListener("click", () => {
  dial.classList.toggle("spinning");
  document.querySelector(".content-container").classList.toggle("activated");
});

addAnimation(`
@keyframes spinning {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(${value}deg);
    }
}
    `);
