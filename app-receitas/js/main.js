// recipe of the day
let randomContainer = document.querySelector(".random");

function createItem(item, random = false) {
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
}

// get random recipe from API
async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const responseJson = await response.json();
  const mealData = responseJson.meals[0];

  createItem(mealData, true);
}

// add favorites items
let favoriteContainer = document.querySelector(".favorites-container");

async function favorites() {
  favoriteContainer.innerHTML = "";

  const favovitesMeals = getMealLS();

  for (let i = 0; i < favovitesMeals.length; i++) {
    const mealId = favovitesMeals[i];
    const meal = await getMealById(mealId);
    createFavorite(meal);
  }
}

favorites();

function createFavorite(item) {
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
    .addEventListener("click", () => removeFromLS(item.idMeal));
}

async function getMealById(id) {
  const meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const mealArray = await meal.json();
  const mealData = mealArray.meals[0];
  return mealData;
}

// favorite
function favoriteMeal(id) {
  const mealIds = getMealLS();
  mealIds.push(id);
  setMealLS(mealIds);
}

// search
const searchBtn = document.querySelector(".search");
const searchInput = document.getElementById("search-input");
searchBtn.addEventListener("click", () => {
  const name = searchInput.value;
  searchByName(name);
});

async function searchByName(name) {
  randomContainer.innerHTML = ''
  const mealName = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name
  );
  const respName = await mealName.json();
  const nameData = respName.meals;
  nameData.forEach(item => createItem(item))
  console.log(nameData);
}

// meal modal

// local storage
function setMealLS(mealId) {
  localStorage.setItem("mealIds", JSON.stringify(mealId));
}

function removeFromLS(mealId) {
  const meals = getMealLS();
  const res = meals.filter((item) => item !== mealId);
  setMealLS(res);
  favorites();
}

function getMealLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds === null ? [] : mealIds;
}

// init
getRandomMeal();
