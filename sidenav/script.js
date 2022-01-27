hamburguer.addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelector('.close').addEventListener("click", () => {
  document.querySelector(".nav-items").classList.remove("active");
});
