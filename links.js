let baseURL = "https://seriousmikey.github.io/wdd230/";
let linksURL = "https://seriousmikey.github.io/wdd230/data/links.json";

let lessonNumber = 0;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    i = 1;
    weeks.forEach(week => {
        lessonNumber = document.getElementById(`0${i}`);
        
        let linksVar = week.links;
    
        let number = 0;
        linksVar.forEach(link => {
            let aElement = document.createElement("a");
            aElement.setAttribute("href", linksVar[number].url);
            aElement.setAttribute("target", "_blank");
            aElement.textContent = linksVar[number].title;
    
            lessonNumber.appendChild(aElement);
    
            number++;
        });
        i++;
    });
};

getLinks();