import createItem from "./create-item.js";

const searchBtn = document.querySelector(".search");
const searchInput = document.getElementById("search-input");
searchBtn.addEventListener("click", () => {
  const name = searchInput.value;
  searchByName(name);
});

export default async function searchByName(name) {
  randomContainer.innerHTML = ''
  const mealName = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name
  );
  const respName = await mealName.json();
  const nameData = respName.meals;
  nameData.forEach(item => createItem(item))
}
