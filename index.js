const spinButton = document.getElementById("spin");
const dial = document.querySelector(".dial");

let dynamicStyles = null;
function addAnimation(body) {
  // Add animation stlye dynamically
  if (!dynamicStyles) {
    dynamicStyles = document.createElement("style");
    document.head.appendChild(dynamicStyles);
  }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

spinButton.addEventListener("click", () => {
  dial.classList.toggle("spinning");
  document.querySelector("content-container").classList.toggle("activated");
});

const value = 2007; // Testing value

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
