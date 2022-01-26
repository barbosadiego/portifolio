const numberDisplay = document.querySelector(".number");
const buttons = document.querySelectorAll("button");

let counter = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const button = e.target;
    if (button.classList.contains("aumentar")) {
      counter++;
    } else if (button.classList.contains("diminuir")) {
      counter--;
    } else {
      counter = 0;
    }
    numberDisplay.innerText = counter;
    checkNumber();
  });
});

function checkNumber() {
  if (counter < 0) {
    numberDisplay.style.color = "red";
  } else if (counter > 0) {
    numberDisplay.style.color = "green";
  } else {
    numberDisplay.style.color = "black";
  }
}
