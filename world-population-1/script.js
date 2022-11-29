const analyticsContainer = document.getElementById('analytics_container')
const populationButton = document.getElementById('population_button')
const languagesButton = document.getElementById('languages_button')
const actionText = document.getElementById('action_text')

init()

function init() {
    setAnalyticsCountriesVsPopution()
    console.log(countries_data)
    populationButton.addEventListener('click', setAnalyticsCountriesVsPopution)
    languagesButton.addEventListener('click', setAnalyticsLanguageVsNumberOfCountries)
}

function setAnalyticsCountriesVsPopution() {
    const countryVsPopulation = sortedPopulationData()
    const totalPopulation = getTotalPoplation()
    let html = `<div class="analytics-row">
    <span class="first_column">World</span>
    <div class="bar_container">
      <div class="bar" style="width: 100%"></div>
    </div>
    <span>${totalPopulation}</span>
  </div>`
    for (let i = 0; i < countryVsPopulation.length; i++) {
        html += `<div class="analytics-row">
        <span class="first_column">${countryVsPopulation[i].name}</span>
        <div class="bar_container">
          <div class="bar" style="width: ${(countryVsPopulation[i].population / totalPopulation) * 100}%"></div>
        </div>
        <span>${countryVsPopulation[i].population}</span>
      </div>`
    }
    analyticsContainer.innerHTML = html
    actionText.innerText = '10 most populated countries in the world'
}

function setAnalyticsLanguageVsNumberOfCountries() {

    const languageVsNumberOfCountries = sortedLanguageVsNumberOfCountriesData()
    console.log(languageVsNumberOfCountries)
    let html = ''
    for (let language in languageVsNumberOfCountries) {
        html += `<div class="analytics-row">
        <span class="first_column">${language}</span>
        <div class="bar_container">
          <div class="bar" style="width: ${(languageVsNumberOfCountries[language] / countries_data.length) * 100}%"></div>
        </div>
        <span>${languageVsNumberOfCountries[language]}</span>
      </div>`
    }
    analyticsContainer.innerHTML = html
    actionText.innerText = '10 most spoken languages in the world'
}

function sortedLanguageVsNumberOfCountriesData() {
    const languagesVsNumberOfCountries = {}

    for (let i = 0; i < countries_data.length; i++) {
        const country = countries_data[i]
        const languages = country.languages
        for (let j = 0; j < languages.length; j++) {
            const language = languages[j]
            if (languagesVsNumberOfCountries[language]) {
                languagesVsNumberOfCountries[language] += 1
            } else {
                languagesVsNumberOfCountries[language] = 1
            }
        }
    }
    const newLanguagesVsNumberOfCountries = {}
    const languages = Object.keys(languagesVsNumberOfCountries);
    const numberOfCountries = Object.values(languagesVsNumberOfCountries);
    for (let i = 0; i < 10; i++) {
        let maxIndex = 0
        for (let j = 0; j < numberOfCountries.length; j++) {
            if (numberOfCountries[j] && numberOfCountries[j] >= numberOfCountries[maxIndex]) {
                maxIndex = j
            }
        }
        newLanguagesVsNumberOfCountries[languages[maxIndex]] = numberOfCountries[maxIndex]
        numberOfCountries[maxIndex] = undefined
    }
    return newLanguagesVsNumberOfCountries
}

function sortedPopulationData() {
    const countriesDataCopy = [...countries_data]
    return countriesDataCopy.sort((a, b) => {
        return b.population - a.population
    }).slice(0, 10).map((country) => {
        return {
            name: country.name,
            population: country.population
        }
    })
}

function getTotalPoplation() {
    return countries_data.reduce((start, country) => {
        return start + country.population
    }, 0)
}