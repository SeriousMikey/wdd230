const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        li.innerHTML = input.value;
        delButton.innerHTML = "❌";
        li.append(delButton);
        list.append(li);
        input.focus();
        input.value = "";

        delButton.addEventListener("click", () => {
            li.remove();
            input.focus();
            input.value = "";
        })
    }
    else {
        input.focus();
    }
});