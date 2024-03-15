const d = new Date();
let day = d.getDay()

if (day > 0 && day < 3) {
    let bodySelector = document.querySelector("body");
    let banner = document.createElement("section");
    let bannerContent = document.createElement("h1");
    let exitButton = document.createElement("button");

    banner.setAttribute("id", "banner");
    bannerContent.textContent = "Join us at the Layton Chamber of Commerce Meet and Greet on Wednesday at 7:00PM!"
    exitButton.textContent = "Close";

    banner.appendChild(bannerContent);
    banner.appendChild(exitButton);
    bodySelector.appendChild(banner);

    bodySelector.style.overflow = "hidden";

    exitButton.addEventListener("click", () => {
        banner.remove();
        bannerContent.remove();
        exitButton.remove();
        bodySelector.style.overflow = "";
    });
}
