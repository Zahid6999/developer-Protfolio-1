const loadMealFun = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealFun(data.meals))
}

const displayMealFun = singleMeal => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    singleMeal.forEach(meal => {
        // console.log(meal);
        const newDiv = document.createElement('div'); 
        newDiv.classList.add('col');
        newDiv.innerHTML = `
         <div onclick="loadMealDetail(${meal.idMeal})" class="card">
          <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
               <h4>Meal-Id: ${meal.idMeal}</h4>
               <h5 class="card-title">Meal Title: ${meal.strMeal}</h5>
               <p class="card-text">Drink: ${meal.strDrinkAlternate}.</p>
               <p class="card-text">Drink: ${meal.strInstructions.slice(0,500)}.</p>
             </div>
            </div>
        `;
        mealContainer.appendChild(newDiv);
    });
}


const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchInput = searchField.value;
   loadMealFun(searchInput);
   searchField.value = '';
}

const loadMealDetail = (idMeal) => {
//  console.log(idMeal);
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(response => response.json())
.then(detail => displayShowMealDetail(detail.meals[0]))
}

const displayShowMealDetail = (dtlsMeal) => {
    
    const mealDetailsContainer = document.getElementById('mealDetails-container');
    mealDetailsContainer.innerHTML = ``;
    const createDiv = document.createElement('div');
    createDiv.classList.add('card');
    createDiv.innerHTML = `
    <img src="${dtlsMeal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetailsContainer.appendChild(createDiv);
}
loadMealFun('');