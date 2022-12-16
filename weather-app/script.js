const searchInput = document.getElementById('search_input');
const searchButton = document.getElementById('search_button');
const season = document.getElementById('season');
const weatherImage = document.getElementById('weather_image');
const temperatureBlock = document.getElementById('temperature');

init()

function init() {
    searchButton.addEventListener('click', fetchWeather)
}


async function fetchWeather() {
    const location = searchInput.value;
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    const weatherDescription = jsonData.weather[0].description
    const weatherIcon = jsonData.weather[0].icon
    const temperature = jsonData.main.temp
    const humidity = jsonData.main.humidity
    const windSpeed = jsonData.wind.speed
    const cloudiness = jsonData.clouds.all
    season.innerText = weatherDescription
    weatherImage.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
    temperatureBlock.innerHTML = `${temperature}&deg;F`
}