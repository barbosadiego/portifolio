const menu = document.querySelector(".menu-btn");
const nav = document.querySelector('nav')

menu.addEventListener("click", () => {
  menu.classList.toggle("show");
  nav.classList.toggle('show')
});
