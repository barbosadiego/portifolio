const container = document.querySelectorAll(".review-container");
const buttons = document.querySelectorAll(".btn");
const surpriseBtn = document.querySelector(".random");

window.addEventListener("DOMContentLoaded", () => {
  container[0].classList.add("show");
});

buttons.forEach((btn) => {
  let counter = 0;
  btn.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("left")) {
      if (counter === 0) {
        counter = container.length;
      }
      counter--;
      changeCard(counter);
    } else {
      if (counter === container.length - 1) {
        counter = 0;
      }
      counter++;
      changeCard(counter);
    }
  });
});

surpriseBtn.addEventListener("click", () => {
  const ramdom = Math.abs(Math.floor(Math.random() * container.length - 1));
  changeCard(ramdom);
});

function changeCard(counter) {
  container.forEach((item) => {
    item.classList.remove("show");
  });
  container[counter].classList.add("show");
}
