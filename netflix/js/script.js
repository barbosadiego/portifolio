const sliders = document.querySelector('.carousel-box');
let scrollPerPick;
let imagePadding = 20;

async function showMovieData(){
  const apiKey = '9c9812be1a1ba5a02119cd027ce578f2';

  const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);
  const resultDados = await result.json();
  const arrayDados = resultDados.results
  

  arrayDados.map(function(item, index){
    const img = document.createElement('img');
    img.classList.add = 'slider-img';
    img.setAttribute('src', `https://image.tmdb.org/t/p/original${item.poster_path}`);
    sliders.appendChild(img)
  })
  // console.log(arrayDados)
}

showMovieData()