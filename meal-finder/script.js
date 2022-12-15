const searchInput = document.getElementById('search_input')
const mealsContainer = document.getElementById('meals_container')

init()

function init() {
    fetchMeals()
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            fetchMeals()
        }
    })
}

async function fetchMeals() {
    const value = searchInput.value
    const streamResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    const textBody = await streamResponse.text()
    const jsonData = JSON.parse(textBody)
    let html = ''
    for (let i = 0; i < jsonData.meals.length; i++) {
        html += `<img class="meal_image"
        src="${jsonData.meals[i].strMealThumb}"
      />`
    }
    mealsContainer.innerHTML = html
}