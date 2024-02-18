const temp = document.querySelector("#temp").innerHTML;
const windSpeed = 16;
let windChill = 0;

if (temp <= 50 && windSpeed > 3) {
    windChill = (35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16)).toFixed(1);
}
else {
    windChill = "N/A";
}

document.querySelector("#windChill").innerHTML = windChill;