const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let charactersArray = getChapterList() || [];
charactersArray.forEach(chapter => {
    displayList(chapter)
})

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        charactersArray.push(input.value)
        setChapterList();
        input.value = "";
        input.focus();
    }
    else {
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    const delButton = document.createElement("button");
    li.textContent = item;
    delButton.textContent = "❌";
    delButton.classList.add("delete");
    li.append(delButton);
    list.append(li);

    delButton.addEventListener("click", () => {
        li.remove();
        deleteChapter(li.textContent)
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem("myBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}