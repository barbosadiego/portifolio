let images = [
  { url: "./img/img-1.jpg" },
  { url: "./img/img-2.jpg" },
  { url: "./img/img-3.jpg" },
  { url: "./img/img-4.jpg" },
  { url: "./img/img-5.jpg" },
  { url: "./img/img-6.jpg" },
  { url: "./img/img-7.jpg" },
];

const imageContainer = document.querySelector(".container-items");

const createItem = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    <div class="item"><img src="${image.url}"/></div>
    `;
  });
};

createItem(images, imageContainer);

let items = document.querySelectorAll(".item");

const previous = () => {
  imageContainer.appendChild(items[0])
  items = document.querySelectorAll('.item')
};

const next = () => {
  const lastItem = items[items.length -1];
  imageContainer.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item')
}

document.querySelector('.previous').addEventListener('click', previous);
document.querySelector('.next').addEventListener('click', next)