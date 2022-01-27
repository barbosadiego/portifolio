const monthArray = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const daysArray = ['dom','seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
const display = document.querySelectorAll('.display')
const text = document.querySelector('.intro__content p');

let tempDate = new Date();
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const eventDate = new Date(tempYear, tempMonth, tempDay + 73, 11,30);

let eventWeekDay = daysArray[eventDate.getDay()];
let eventMonhtDay = eventDate.getDate();
let eventMont = monthArray[eventDate.getMonth()];
let atualYear = eventDate.getFullYear()

text.innerHTML = `<p>O sorteiro acontecerá ${eventWeekDay}, ${eventMonhtDay} de ${eventMont} de ${atualYear}, às 11:30</p>`

function calcTime() {
  const today = new Date().getTime();
  const t = eventDate - today;

  const tDays = 24 * 60 * 60 * 1000;
  const tHours = 60 * 60 * 1000;
  const tMin = 60 * 1000;
  const tSec = 1000;

  const days = Math.floor(t / tDays);
  const hours = Math.floor((t % tDays) / tHours);
  const min = Math.floor((t % tHours) / tMin);
  const secs = Math.floor((t % tMin) / tSec);

  const arrayTime = [days, hours, min, secs];

  display.forEach((item, index) => {
    item.textContent = format(arrayTime[index])
  })

}

function format (item){
  if (item < 10){
    return `0${item}`
  };
  return item
}

function init (){
  setInterval(calcTime, 1000)
}

init()