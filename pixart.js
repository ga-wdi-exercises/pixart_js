function setBrushToInputColor(){
	var brush = document.getElementsByClassName("brush")[0];
	var newColor = newColorField.value;
	brush.style.backgroundColor = newColor;
}

var button = document.getElementById("set-color");
var newColorField = document.getElementById("color-field")
button.addEventListener("click",
	function(event){ event.preventDefault(); setBrushToInputColor()});
newColorField.addEventListener("keypress",
	function(event){ var key = event.which; if (key === 13) {setBrushToInputColor}});