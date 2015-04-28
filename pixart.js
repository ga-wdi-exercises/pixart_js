var form = document.querySelector("#form")
var brush = document.querySelector("div.brush")

var colorChange = document.querySelector("#color-field")
form.addEventListener("submit", changeIt)

function changeIt (event){
	event.preventDefault(); 

	brush.style.backgroundColor = colorChange.value;
}




for(var i = 0; i < 21; i++) {
	var square = document.createElement('div');
	square.className = "square"
	document.body.appendChild(square);
}






