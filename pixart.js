
var setColorButton = document.querySelector("#set-color");

function handleClickButton() {
	var chosenColor = document.querySelector("#color-field");
	var brushBox = document.querySelector(".brush");
	brushBox.style.background = chosenColor.value;
	event.preventDefault();
	document.querySelector("#color-field").value = "";
	debugger;
}

function handlePressEnter() {
	var chosenColor = document.querySelector("#color-field");
	var brushBox = document.querySelector(".brush");
	var key =  event.keyCode;
	if (key === 13) {
		brushBox.style.background = chosenColor.value;
		document.querySelector("#color-field").value = "";
		event.preventDefault();
	}
}



setColorButton.addEventListener("click", handleClickButton);
document.querySelector("#color-field").addEventListener("keypress", handlePressEnter);