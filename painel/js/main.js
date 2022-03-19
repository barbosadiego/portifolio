const data = [
  {
    url: "./painel/images/capa-1.png",
    link: "./bitcoin/index.html",
  },
  {
    url: "./painel/images/capa-2.png",
    link: "./cardapio/index.html",
  },
  {
    url: "./painel/images/capa-3.png",
    link: "./carrosel-dog/index.html",
  },
  {
    url: "./painel/images/capa-4.png",
    link: "./color-flip/index.html",
  },
  {
    url: "./painel/images/capa-5.png",
    link: "./countdown-timer/index.html",
  },
  {
    url: "./painel/images/capa-6.png",
    link: "./counter/index.html",
  },
  {
    url: "./painel/images/capa-7.png",
    link: "./cripto-price/index.html",
  },
  {
    url: "./painel/images/capa-8.jpg",
    link: "./drumkit/index.html",
  },
  {
    url: "./painel/images/capa-9.png",
    link: "./grocery-website/index.html",
  },
  {
    url: "./painel/images/capa-10.png",
    link: "./image-filter/index.html",
  },
  {
    url: "./painel/images/capa-11.jpg",
    link: "./movie-site/index.html",
  },
  {
    url: "./painel/images/capa-12.png",
    link: "./navbar/index.html",
  },
  {
    url: "./painel/images/capa-13.png",
    link: "./netflix/index.html",
  },
  {
    url: "./painel/images/capa-14.png",
    link: "./nftlanding - figma/index.html",
  },
  {
    url: "./painel/images/capa-15.png",
    link: "./plantinha - figma/index.html",
  },
  {
    url: "./painel/images/capa-16.png",
    link: "./plantshop - figma/index.html",
  },
  {
    url: "./painel/images/capa-17.png",
    link: "./questions/index.html",
  },
  {
    url: "./painel/images/capa-18.png",
    link: "./repair-site/index.html",
  },
  {
    url: "./painel/images/capa-19.png",
    link: "./reviews/index.html",
  },
  {
    url: "./painel/images/capa-20.png",
    link: "./shoebrand/index.html",
  },
  {
    url: "./painel/images/capa-21.png",
    link: "./sidenav/index.html",
  },
  {
    url: "./painel/images/capa-22.png",
    link: "./slider/index.html",
  },
  {
    url: "./painel/images/capa-23.png",
    link: "./tabnav/index.html",
  },
  {
    url: "./painel/images/capa-24.png",
    link: "./the-box/index.html",
  },
  {
    url: "./painel/images/capa-25.png",
    link: "./typewriter/index.html",
  },
  {
    url: "./painel/images/capa-26.jpg",
    link: "./app-receitas/index.html",
  },
  {
    url: "./painel/images/capa-27.jpg",
    link: "./weather-app/index.html",
  },
  {
    url: "./painel/images/capa-28.jpg",
    link: "./portfolio-figma/index.html",
  },
  {
    url: "./painel/images/capa-29.jpg",
    link: "./venturastic-figma/index.html",
  }
];

const container = document.querySelector('.container');

data.forEach((item, index) => {
  createLink(item, index);
})

function createLink(item, index){
  const div = document.createElement('div');
  div.classList.add('link');
  // div.classList.add(`item-${index + 1}`)
  div.innerHTML = `
    <a href="${item.link}" target="_blank">ver projeto</a>
    <div><img src="${item.url}"></div>
  `;
  container.appendChild(div);
};
