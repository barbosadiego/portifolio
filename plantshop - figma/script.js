const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const itemsHero = document.querySelectorAll(".section-1 .carrosel .item");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

window.onscroll = () => {
  nav.classList.remove("active");
};

for (let i = 0; i < itemsHero.length; i++) {
  createDot(document.querySelector(".dots-container"));
}

function createDot(container) {
  const div = document.createElement("div");
  div.classList.add("dot");
  container.appendChild(div);
}

const dotsHero = document.querySelectorAll(".section-1 .dot");

itemsHero[0].classList.add("active");
dotsHero[0].classList.add("active");

dotsHero.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeItem(index);
  });
});

function activeItem(index) {
  itemsHero.forEach((item) => item.classList.remove("active"));
  dotsHero.forEach((item) => item.classList.remove("active"));

  itemsHero[index].classList.add("active");
  dotsHero[index].classList.add("active");
}

let index = 0;
setInterval(function () {
  activeItem(index);
  index++;
  if (index === itemsHero.length) {
    index = 0;
  }
}, 3000);
