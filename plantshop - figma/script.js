const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const itemsHero = document.querySelectorAll(".section-1 .carrosel .item");

// menu mobile

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

window.onscroll = () => {
  nav.classList.remove("active");
};

// hero slider

for (let i = 0; i < itemsHero.length; i++) {
  createDot(document.querySelector(".dots-container"));
}

const dotsHero = document.querySelectorAll(".section-1 .dot");
itemsHero[0].classList.add("active");
dotsHero[0].classList.add("active");

function createDot(container) {
  const div = document.createElement("div");
  div.classList.add("dot");
  container.appendChild(div);
}

function activeItem(index) {
  itemsHero.forEach((item) => item.classList.remove("active"));
  dotsHero.forEach((item) => item.classList.remove("active"));

  itemsHero[index].classList.add("active");
  dotsHero[index].classList.add("active");
}

dotsHero.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeItem(index);
  });
});

let index = 1;
setInterval(function () {
  activeItem(index);
  index++;
  if (index === itemsHero.length) {
    index = 0;
  }
}, 3000);

// product slider

const leftBtn = document.querySelector('.section-5 .left');
const rightBtn = document.querySelector('.section-5 .right');
const cardContainer = document.querySelector('.section-5 .card-container');

leftBtn.addEventListener('click', ()=>{
  cardContainer.scrollLeft += 320
})

rightBtn.addEventListener('click', ()=>{
  cardContainer.scrollLeft += -320
})