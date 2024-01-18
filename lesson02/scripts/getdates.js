// Getting and setting the year

let date = new Date;
let year = date.getFullYear();

document.getElementById("yearInfo").innerHTML = `\u00A9${year} | Michael Hyer | Utah`;


// Getting and setting the last modified date

let lastModified = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = `Last modification: ${lastModified}`;