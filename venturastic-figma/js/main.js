const btnMenu = document.querySelector("[data-menu]");
const menu = document.querySelector("[data-list]");
const links = document.querySelectorAll("[data-list] a");
const closeMenu = document.querySelector("[data-close]");

const showMenu = () => menu.classList.add("active");
const removeShowMenu = () => menu.classList.remove("active");

btnMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", removeShowMenu);
links.forEach((link) => link.addEventListener("click", removeShowMenu));
