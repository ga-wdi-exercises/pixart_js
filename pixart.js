

var setBoxColor = function( event ){
	event.preventDefault();
	colorField = document.getElementById("color-field")
	chosenColor = colorField.value
	var brush = document.querySelector(".brush")
	brush.style.backgroundColor = chosenColor
}

var setColorButton = document.getElementById("set-color")
setColorButton.addEventListener("click", setBoxColor);

for(i = 0; i < 21; i++) {
	var square = document.createElement('div');
	square.className = "square";
	square.addEventListener("click", function(event){
		this.style.backgroundColor = chosenColor
	})
	document.body.appendChild(square);
}

