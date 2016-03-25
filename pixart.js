
var setColorButton = document.querySelector("#set-color");

function handleClickButton() {
	var chosenColor = document.querySelector("#color-field").value;
	var brushBox = document.querySelector(".brush");
	brushBox.style.background = chosenColor;
	event.preventDefault();
	document.querySelector("#color-field").value = "";
}


setColorButton.addEventListener("click", handleClickButton);
