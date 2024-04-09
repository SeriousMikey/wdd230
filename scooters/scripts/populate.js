let baseURL = "https://seriousmikey.github.io/wdd230/";
let linksURL1 = "https://seriousmikey.github.io/wdd230/scooters/data/rentals.json";
let linksURL2 = "https://seriousmikey.github.io/wdd230/scooters/data/reviews.json";
//let linksURL1 = "data/rentals.json"
//let linksURL2 = "data/reviews.json"

let modelSection = document.querySelector("#models")
let infoSection = document.querySelector("#more_info")

async function getLinks() {
    const response = await fetch(linksURL1);
    const data = await response.json();

    populateModels(data.rentals);
    populateInfo(data.rentals);
}

function populateModels(rentals) {
    for (i = 0; i < 6; i++) {
        let rental = rentals[i]

        // Create the elements
        let a = document.createElement("a");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let hr = document.createElement("hr");
        let h2 = document.createElement("h2");
        
        // Give elements information
        a.setAttribute("href", `#${rental.type}`)
        div.setAttribute("class", "model")
        img.setAttribute("src", rental.image)
        img.setAttribute("alt", rental.type)
        h2.textContent = `${rental.type}`

        // Add elements to the id
        div.appendChild(img)
        div.appendChild(hr)
        div.appendChild(h2)
        a.appendChild(div)
        modelSection.appendChild(a)
    }
}

function populateInfo(rentals) {
    for (i = 0; i < 6; i++) {
        let rental = rentals[i]

        // Create the elements
        let mainDiv = document.createElement("div");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let li5 = document.createElement("li");
        let li6 = document.createElement("li");
        let customer_div = document.createElement("div");
        let title = document.createElement("h2");
        
        // Give elements information
        mainDiv.setAttribute("class", "info_card")
        mainDiv.setAttribute("id", rental.type)
        h1.textContent = rental.type
        img.setAttribute("src", rental.image)
        img.setAttribute("alt", rental.type)
        li1.textContent = `Price Range: ${rental.reservation_half_price} - ${rental.walkin_full_price}`
        li2.textContent = `Max People: ${rental.max_persons}`
        li3.textContent = rental.function1
        li4.textContent = rental.function2
        li5.textContent = rental.function3
        li6.textContent = rental.function4


        // Add elements to the id
        mainDiv.appendChild(h1)
        mainDiv.appendChild(img)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(li5)
        ul.appendChild(li6)
        mainDiv.appendChild(ul)
        infoSection.appendChild(mainDiv)
    }
}

getLinks()