import { mealModal as container } from "./create-item.js";
const item = document.querySelector('.random .img');
const ingredients = []



export default function mealModal(meal){

  for(let i = 1; i <= 20; i++){
    if(meal['strIngredient'+i]){
      ingredients.push(`${meal["strIngredient"+i]} - ${meal['strMeasure'+i]}`)
    } else{
      break
    }
  }

  container.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('meal-modal-container');
  div.innerHTML = `
    <i class="fas close-btn fa-times"></i>
    <img src="${meal.strMealThumb}" alt="">
    <div class="info">
      <h1>${meal.strMeal}</h1>
      <h2>Instructions</h2>
      <p>${meal.strInstructions}</p>
      <h2>Ingredients</h2>
      <ul>
        ${ingredients.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;


  container.appendChild(div)
  container.classList.add('show')
  container.querySelector('.close-btn').addEventListener('click', ()=> container.classList.remove('show'))
}  
