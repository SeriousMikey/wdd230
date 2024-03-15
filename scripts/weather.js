const currentWeather = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weatherIcon");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.06022&lon=-111.97105&units=imperial&appid=abffda1049e1c4d19b67132aaef9a789";

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    }
    else {
        throw Error(await response.text());
    }
}

function displayResults(data) {
    let temp = Math.round(data.main.temp);
    currentWeather.innerHTML = `${temp}&deg;F - ${data.weather[0].description}`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute("alt", data.weather[0].main)
}

apiFetch();
