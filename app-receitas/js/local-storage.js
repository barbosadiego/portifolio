import favorites from "./add-fav-item.js";

// local storage
export function setMealLS(mealId) {
  localStorage.setItem("mealIds", JSON.stringify(mealId));
}

export function removeFromLS(mealId) {
  const meals = getMealLS();
  const res = meals.filter((item) => item !== mealId);
  setMealLS(res);
  favorites();
}

export function getMealLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds === null ? [] : mealIds;
}
