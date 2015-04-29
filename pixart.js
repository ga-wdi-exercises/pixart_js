function preventDef(event) {
  event.preventDefault();
}

var setColor = document.getElementById("set-color");
var brush = document.querySelector(".brush");
var input = document.getElementById("color-field");

function colorChange() {
	var newColor = input.value;
	brush.style.backgroundColor = newColor;
}

setColor.addEventListener("click", preventDef);
setColor.addEventListener("click", colorChange);

