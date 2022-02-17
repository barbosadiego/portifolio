import favoriteMeal from "./favorites-meals.js";
import favorites from "./add-fav-item.js";

// recipe of the day
let randomContainer = document.querySelector(".random");
const mealModal = document.querySelector('.meal-modal');
const closeBnt = document.querySelector('.meal-modal .close-btn')


export default function createItem(item, random = false) {
  const div = document.createElement("div");
  div.classList.add("img");
  div.innerHTML = `
    <div class="img">
    ${random ? '<h3 class="tag">Recipe of the day</h3>' : ""}
    <img src="${item.strMealThumb}" alt="">
    </div>
    <div class="title">
      <h2>${item.strMeal}</h2>
      <i class="fav-icon fas fa-heart"></i>
    </div>
  `;
  randomContainer.appendChild(div);

  div.querySelector(".fav-icon").addEventListener("click", (e) => {
    favoriteMeal(item.idMeal);
    e.target.classList.toggle("active");
    favorites();
    document.location.reload();
  });

  div.querySelector('.img').addEventListener('click', () => {
    mealModal.classList.add('show')
  })
  closeBnt.addEventListener('click', () => {
    mealModal.classList.remove('show')
  })
}