const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.95&units=imperial&appid=abffda1049e1c4d19b67132aaef9a789";

let today = document.getElementById("today_weather")
let todayTitle = today.querySelector("h4")
let todayImg = today.querySelector("img")
let todayP = today.querySelector("p")

let tomorrow = document.getElementById("tomorrow_weather")
let tomorrowTitle = tomorrow.querySelector("h4")
let tomorrowImg = tomorrow.querySelector("img")
let tomorrowP = tomorrow.querySelector("p")

let dayAfter = document.getElementById("day_after_weather")
let dayAfterTitle = dayAfter.querySelector("h4")
let dayAfterImg = dayAfter.querySelector("img")
let dayAfterP = dayAfter.querySelector("p")

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

    todayP.innerHTML = `${temp}&deg;F - ${data.weather[0].description}`;
    todayTitle.innerHTML = `${data.weather[0].main}`
    todayImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    todayImg.setAttribute("alt", data.weather[0].main)

    tomorrowP.innerHTML = `${temp +2}&deg;F - ${data.weather[0].description}`;
    tomorrowTitle.innerHTML = `${data.weather[0].main}`
    tomorrowImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    tomorrowImg.setAttribute("alt", data.weather[0].main)

    dayAfterP.innerHTML = `${temp -5}&deg;F - ${data.weather[0].description}`;
    dayAfterTitle.innerHTML = `${data.weather[0].main}`
    dayAfterImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    dayAfterImg.setAttribute("alt", data.weather[0].main)
}

apiFetch();
