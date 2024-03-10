let baseURL = "https://seriousmikey.github.io/wdd230/";
// let linksURL = "https://seriousmikey.github.io/wdd230/chamber/data/members.json";
let linksURL = "data/members.json";
let display = document.querySelector("#display");
let gridbutton = document.querySelector("#grid-mode");
let listbutton = document.querySelector("#list-mode");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid-mode");
	display.classList.remove("list-mode");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list-mode");
	display.classList.remove("grid-mode");
});

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.members);
}

const displayLinks = (members) => {
    members.forEach(member => {
            let section = document.createElement("section");
            let image = document.createElement("img");
            let company = document.createElement("h3");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("a");
            let level = document.createElement("p");

            image.setAttribute("src", member.logo);
            image.setAttribute("alt", member.name);

            company.textContent = member.name;

            address.textContent = member.address;
            phone.textContent = member.phone;

            url.setAttribute("href", member.url);
            url.setAttribute("target", "_blank");
            url.textContent = "Website URL";

            if (member.level == "bronze"){
                level.textContent = "Member Level: 🤎";
            }
            else if (member.level == "silver"){
                level.textContent = "Member Level: 🩶";
            }
            else if (member.level == "gold"){
                level.textContent = "Member Level: 💛";
            }
            else {
                level.textContent = "Member Level: 🤍";
            }

            section.appendChild(image);
            section.appendChild(company);
            section.appendChild(address);
            section.appendChild(phone);
            section.appendChild(url);
            section.appendChild(level);

            display.appendChild(section);
    });
};

getLinks();