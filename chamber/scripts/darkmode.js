const darkButton = document.querySelector("input");
const body = document.querySelector("body");
const currentEvents = document.querySelector("#current_events");
const weather = document.querySelector("#weather");
const ad = document.querySelectorAll(".ad");
const contactInfo = document.querySelectorAll(".ad .contact_info");
const contactLink = document.querySelectorAll(".contact_info a");

darkButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    currentEvents.classList.toggle("dark");
    weather.classList.toggle("dark");
    ad.forEach(instance => {
        instance.classList.toggle("dark");
        });
    contactInfo.forEach(instance => {
        instance.classList.toggle("dark");
    });
    contactLink.forEach(instance => {
        instance.classList.toggle("dark");
    });
});