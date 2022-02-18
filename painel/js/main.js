const data = [
  {
    url: ".painel/images/capa-1.jpg",
    link: "./bitcoin/index.html",
  },
  {
    url: "./painel/images/capa-2.png",
    link: "./cardapio/index.html",
  },
  {
    url: "./images/capa-3.jpg",
    link: "./carrosel-dog/index.html",
  },
  {
    url: "./images/capa-4.jpg",
    link: "./color-flip/index.html",
  },
  {
    url: "./images/capa-5.jpg",
    link: "./countdown-timer/index.html",
  },
  {
    url: "./images/capa-26.jpg",
    link: "./app-receitas/index.html",
  },
];

const container = document.querySelector('.container')

function createLink(item){
  const div = document.createElement('div');
  div.classList.add('link');
  div.innerHTML = `
    <a href="${item.link}">ver projeto</a>
    <div><img src="${item.url}"></div>
  `;
  container.appendChild(div);
}

createLink(data[1])