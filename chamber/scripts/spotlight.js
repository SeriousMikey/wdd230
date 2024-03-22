let baseURL = "https://seriousmikey.github.io/wdd230/";
let linksURL = "https://seriousmikey.github.io/wdd230/chamber/data/members.json";

let adsSection = document.querySelector("#ads")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    makeSpotlight(data.members);
}


function makeSpotlight(members) {
    // Get the unique member
    let member0 = 10
    let member1 = 11
    let member2 = 12

    for (i = 0; i < 3; i++) {
        let k = 0
        while (k == 0) {
            let randomNumber = Math.floor(Math.random() * 4);
            if (member0 != randomNumber && member1 != randomNumber && member2 != randomNumber) {
                member = members[randomNumber]
                k += 1
            }
            
            if (i == 0) {
                member0 = randomNumber
            }
            else if (i == 1) {
                member1 = randomNumber
            }
            else if (i == 2) {
                member2 = randomNumber
            }
        }

        // Create the elements
        let adContainer = document.createElement("div");
        let title = document.createElement("h2");
        let level = document.createElement("p");
        let contactInfoDiv = document.createElement("div");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        // Give elements information
        adContainer.setAttribute("class", "ad")
        title.textContent = member.name
        level.textContent = `Membership Level: ${member.level}`
        contactInfoDiv.setAttribute("class", "contact_info")
        address.textContent = member.address
        phone.textContent = member.phone
        website.textContent = "Website"
        website.setAttribute("href", member.url)
        website.setAttribute("target", "_blank");

        // Add elements to the ads section
        contactInfoDiv.appendChild(address)
        contactInfoDiv.appendChild(phone)
        contactInfoDiv.appendChild(website)

        adContainer.appendChild(title)
        adContainer.appendChild(level)
        adContainer.appendChild(contactInfoDiv)

        adsSection.appendChild(adContainer)
    }
}

getLinks()