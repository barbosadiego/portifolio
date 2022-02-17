export default async function getMealById(id) {
  const meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const mealArray = await meal.json();
  const mealData = mealArray.meals[0];
  return mealData;
}