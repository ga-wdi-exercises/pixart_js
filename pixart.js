
var setColorButton = document.querySelector("#set-color");
 

function handleClickButton() {
	var chosenColor = document.querySelector("#color-field");
	var brushBox = document.querySelector(".brush");
	brushBox.style.background = chosenColor.value;
	event.preventDefault();
	document.querySelector("#color-field").value = "";
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
function createSquares() {
var square = null; 	
for (i = 0; i < 20; i += 1) {
	square = document.createElement("div");
	square.setAttribute("class", ".square" );
	document.body.appendChild(square);
	
	
}
document.querySelectorAll(".square");

}
createSquares();
setColorButton.addEventListener("click", handleClickButton);
document.querySelector("#color-field").addEventListener("keypress", handlePressEnter);