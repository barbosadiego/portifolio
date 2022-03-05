const input = document.querySelector('input[type="text"]');
const btn = document.querySelector('input[type="submit"]');
const apiKey = 'eb9f08d66580680f98b067338772bcb0';

function searchCity(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => displayData(data))
}

function handleClick(){
  const city = input.value.toLowerCase();
  searchCity(city)
  // console.log(city)
}

function displayData(data){
  const city = document.querySelector('h1');
  const temp = document.querySelector('.container__info .temp');
  const clouds = document.querySelector('.container__info .clouds');
  const desc = document.querySelector('.container__info .description');
  const icon = document.querySelector('.container__icon img');
  const displayTime = document.querySelector('.container__icon p');
  const time = new Date();
  
  city.textContent = data.name;
  temp.textContent = parseInt(data.main.temp);
  clouds.textContent = data.weather[0].main;
  desc.textContent = data.weather[0].description;
  displayTime.textContent = `${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

btn.addEventListener('click', handleClick);
