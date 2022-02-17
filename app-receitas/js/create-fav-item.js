import { favoriteContainer } from "./add-fav-item.js";
import { removeFromLS } from "./local-storage.js";
import mealModal from "./meal-modal-info.js";

export default function createFavorite(item) {
  const div = document.createElement("div");
  div.classList.add("fav-item");
  div.innerHTML = `
    <div class="img">
      <img src="${item.strMealThumb}" alt="">
    </div>
    <span class="title">${item.strMeal}</span>
    <div class="close">
      <i class="fas fa-close"></i>
    </div>
  `;
  favoriteContainer.appendChild(div);

  div
    .querySelector(".close")
    .addEventListener("click", () => removeFromLS(item.idMeal))
  ;
  div
    .addEventListener('click', () => mealModal(item))
  
}