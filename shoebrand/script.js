const menu = document.querySelector("nav");

document.querySelector(".menu").addEventListener("click", () => {
  menu.classList.add("show");
});

document.querySelector(".close").addEventListener("click", () => {
  menu.classList.remove("show");
});
