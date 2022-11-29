const analyticsContainer = document.getElementById('analytics_container')

init()

function init() {
    setAnalyticsCountriesVsPopution()
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
}

function sortedPopulationData() {
    return countries_data.sort((a, b) => {
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