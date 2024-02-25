const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const dateToday = new Date();
const todayHours = dateToday.getHours();
const todayDays = dateToday.getDate();

let lastVisitedHours = Number(window.localStorage.getItem("lastVisitedHours"));
let lastVisitedDays = Number(window.localStorage.getItem("lastVisitedDays"));

let hoursSinceVisit = todayHours - lastVisitedHours;
let daysSinceVisit = todayDays - lastVisitedDays;

if (numVisits == 1) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}
else if ((hoursSinceVisit < todayHours) && (daysSinceVisit > 0) &&(numVisits > 1)) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
}
else {
    visitsDisplay.textContent = `You last visited ${daysSinceVisit} day(s) ago.`;
}

localStorage.setItem("lastVisitedHours", todayHours)
localStorage.setItem("lastVisitedHours", todayDays)