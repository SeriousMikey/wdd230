const currentTemp = document.querySelector("#temp");
const currentHumidity = document.querySelector("#humidity");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=abffda1049e1c4d19b67132aaef9a789";

apiFetch();

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
    currentTemp.innerHTML = `${temp}&deg;F - ${data.weather[0].description}`;
    currentHumidity.innerHTML = `${data.main.humidity / 2}%`;
    let windSpeed = data.wind.speed;

    if (temp <= 50 && windSpeed > 3) {
        windChill = (35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16)).toFixed(1);
    }
    else {
        windChill = "N/A";
    }

    document.querySelector("#windChill").innerHTML = windChill;
}

