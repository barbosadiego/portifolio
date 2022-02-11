const sliders = document.querySelector('.carousel-box');
const left = document.querySelector('.btn-left');
const right = document.querySelector('.btn-right');
let scrollPerPick;
let imagePadding = 20;
let scrollAmount = 0;

left.addEventListener('click', scrollLeft);
right.addEventListener('click', scrollRight)

function scrollLeft(){
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerPick),
    behavior: 'smooth',
  })

  if(scrollAmount < 0){
    scrollAmount = 0
  }

}


function scrollRight(){
  if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerPick),
      behavior: 'smooth',
    })
  }
}


async function showMovieData(){
  const apiKey = '9c9812be1a1ba5a02119cd027ce578f2';

  const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);
  const resultDados = await result.json();
  const arrayDados = resultDados.results
  

  arrayDados.forEach(function(item, index){
    const img = document.createElement('img');
    img.classList.add('slider-img');
    img.classList.add(`img-${index}`);
    img.setAttribute('src', `https://image.tmdb.org/t/p/original${item.poster_path}`);
    sliders.appendChild(img)
  })

  scrollPerPick = document.querySelector('.img-0').offsetWidth + imagePadding;
  // console.log(scrollPerPick)
}

showMovieData()