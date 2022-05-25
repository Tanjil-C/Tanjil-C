async function getRandomMeal(){
    const RandomMeal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}

async function getMealByiD(id){
    const mealId = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
}

async function getMealBySearch(term){
    const mealSearch = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+term)
}