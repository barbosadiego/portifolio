const questions = document.querySelectorAll(".question");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    element.classList.toggle("show");
  });
});
