const menu = document.querySelector(".layer2 nav");
const layer2 = document.querySelector(".layer2");
const display = document.querySelectorAll(".displayTime");

document.querySelector(".open").addEventListener("click", () => {
  menu.classList.toggle("show");
});

window.onscroll = () => {
  menu.classList.remove("show");

  if (window.scrollY > 150) {
    layer2.classList.add("active");
  } else {
    layer2.classList.remove("active");
  }
};

function timer() {
  const time = new Date();

  const atualYear = time.getFullYear();
  const atualMonth = time.getMonth();
  const atualDay = time.getDate();

  const eventData = new Date(atualYear, atualMonth, atualDay + 2, 10, 00);

  const eventTime = eventData.getTime();
  const today = new Date().getTime();

  const t = eventTime - today;

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const tDay = Math.floor(t / day);
  const tHour = Math.floor((t % day) / hour);
  const tMin = Math.floor((t % hour) / min);
  const tSec = Math.floor((t % min) / sec);

  const arrayTime = [tDay, tHour, tMin, tSec];
  display.forEach((item, index) => {
    item.textContent = format(arrayTime[index]);
  });
}

function format (item) {
  if (item < 10){
    return `0${item}`
  } else {
    return item
  }
}

setInterval(timer, 1000);