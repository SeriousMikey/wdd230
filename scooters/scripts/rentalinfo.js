let baseURL = "https://seriousmikey.github.io/wdd230/";
let linksURL = "https://seriousmikey.github.io/wdd230/scooters/data/rentals.json";
//let linksURL = "data/rentals.json"

let tableBody = document.querySelector("tbody")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    generateInfo(data.rentals);
}

function generateInfo(rentals) {
    for (i = 0; i < 6; i++) {
        let rental = rentals[i];

        // Create the elements
        let tr = document.createElement("tr");
        let imageContainer = document.createElement("td");
        let image = document.createElement("img");
        let name = document.createElement("td");
        let max = document.createElement("td");
        let res1 = document.createElement("td");
        let res2 = document.createElement("td");
        let walk1 = document.createElement("td");
        let walk2 = document.createElement("td");

        // Give elements information
        image.setAttribute("src", rental.image);
        image.setAttribute("alt", rental.type);
        name.textContent = rental.type;
        max.textContent = rental.max_persons;
        res1.textContent = rental.reservation_half_price;
        res2.textContent = rental.reservation_full_price;
        walk1.textContent = rental.walkin_half_price;
        walk2.textContent = rental.walkin_full_price;

        // Add elements to the id
        imageContainer.appendChild(image);
        tr.appendChild(imageContainer);
        tr.appendChild(name);
        tr.appendChild(max);
        tr.appendChild(res1);
        tr.appendChild(res2);
        tr.appendChild(walk1);
        tr.appendChild(walk2);
        tableBody.appendChild(tr);
    }
}

getLinks();