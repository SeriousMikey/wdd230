const pwd = document.querySelector("#pwd");
const pwdRepeat = document.querySelector("#pwdRepeat");
const message = document.querySelector("#formmessage");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

pwdRepeat.addEventListener("focusout", checkSame);

function checkSame() {
	if (pwd.value !== pwdRepeat.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
        pwd.value = "";
		pwdRepeat.value = "";
		pwdRepeat.focus();
	}
}

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}