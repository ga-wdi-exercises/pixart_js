var setBoxColor = function( event ){
	event.preventDefault();
	var colorField = document.getElementById("color-field")
	var chosenColor = colorField.value
	var brush = document.querySelector(".brush")
	brush.style.backgroundColor = chosenColor
}

var setColorButton = document.getElementById("set-color")
setColorButton.addEventListener("click", setBoxColor);
