const darkButton = document.querySelector("input");
const body = document.querySelector("body");
const form = document.querySelector("#form");
const outside = document.querySelectorAll(".outside");

darkButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    outside.forEach(instance => {
        instance.classList.toggle("dark");
    });
    form.classList.toggle("dark");
});