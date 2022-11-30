let selectedButton = 'start' //anywhere
let sortOrder = 'asc' //dsc
const startWordButton = document.getElementById('start_word_button')
const anywhereButton = document.getElementById('anywhere_button')
const sortButton = document.getElementById('sort_button')
const sortButtonIcon = document.getElementById('sort_button_icon')
const searchInput = document.getElementById('search_input')
const countriesCardsContainer = document.getElementById('country_cards_container')
const numberOfCountries = document.getElementById('number_of_countires')
const searchText = document.getElementById('search_text')
const filteredNumberOfCountries = document.getElementById('filtered_number_of_countries')

init()

function init() {
    numberOfCountries.innerText = countries.length
    startWordButton.addEventListener('click', function () {
        selectedButton = 'start'
        startWordButton.setAttribute('class', 'select')
        anywhereButton.removeAttribute('class')
        renderCountries()
    })
    anywhereButton.addEventListener('click', function () {
        selectedButton = 'anywhere'
        anywhereButton.setAttribute('class', 'select')
        startWordButton.removeAttribute('class')
        renderCountries()
    })
    sortButton.addEventListener('click', changeSortOrder)
    searchInput.addEventListener('keyup', renderCountries)
    renderCountries()
}

function changeSortOrder() {
    sortOrder = sortOrder === 'asc' ? 'dsc' : 'asc'
    if (sortOrder === 'asc') {
        sortButtonIcon.setAttribute('class', 'fa-solid fa-arrow-down-a-z')
    } else {
        sortButtonIcon.setAttribute('class', 'fa-solid fa-arrow-up-a-z')
    }
    renderCountries()
}

function renderCountries() {
    // filter data as per the button selected and text typed inside search input
    const inputValue = searchInput.value
    searchText.innerText = "'" + inputValue + "'"
    let countriesCopy = [...countries]
    if (selectedButton === 'start') {
        countriesCopy = countriesCopy.filter((country) => {
            return country.toLowerCase().startsWith(inputValue.toLowerCase())
        })
    } else {
        countriesCopy = countriesCopy.filter((country) => {
            return country.toLowerCase().includes(inputValue.toLowerCase())
        })
    }
    filteredNumberOfCountries.innerText = countriesCopy.length
    let html = ''
    if (sortOrder === 'asc') {
        for (let i = 0; i < countriesCopy.length; i++) {
            html += `<div class="country_card">
            <h3 class="country_name">${countriesCopy[i]}</h3>
        </div>`
        }
    } else {
        for (let i = countriesCopy.length - 1; i >= 0; i--) {
            html += `<div class="country_card">
            <h3 class="country_name">${countriesCopy[i]}</h3>
        </div>`
        }
    }
    countriesCardsContainer.innerHTML = html
}