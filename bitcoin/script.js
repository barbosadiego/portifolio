const menu = document.querySelector(".hamburguer");

menu.addEventListener("click", showMenu);
menu.addEventListener("touchstart", showMenu);

function showMenu(e) {
  if (e.type === "touchstart") {
    e.preventDefault();
  }
  document.querySelector("nav").classList.toggle("show");
  menu.classList.toggle("active");
}
