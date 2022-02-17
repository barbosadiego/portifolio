import { getMealLS, setMealLS } from "./local-storage.js";

export default function favoriteMeal(id) {
  const mealIds = getMealLS();
  mealIds.push(id);
  setMealLS(mealIds);
}