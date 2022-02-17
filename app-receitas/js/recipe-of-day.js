import createItem from './create-item.js'


// get random recipe from API
export default async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const responseJson = await response.json();
  const mealData = responseJson.meals[0];

  createItem(mealData, true);
}
