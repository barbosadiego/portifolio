import createFavorite from "./create-fav-item.js";
import getMealById from "./meal-by-id.js";
import {getMealLS} from './local-storage.js';

export let favoriteContainer = document.querySelector(".favorites-container");

export default async function favorites() {
  favoriteContainer.innerHTML = "";

  const favovitesMeals = getMealLS();

  for (let i = 0; i < favovitesMeals.length; i++) {
    const mealId = favovitesMeals[i];
    const meal = await getMealById(mealId);
    createFavorite(meal);
  }
}