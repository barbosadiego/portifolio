const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

window.onscroll = () => {
  nav.classList.remove("active");
};
