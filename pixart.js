// var color = document.getElementById("color-field").value;
// var newColor = document.forms["form"]["color-field"].value;
// console.log(newColor);
// function switchColor(){
// 	document.getElementsByClassName("brush").style.backgroundColor = newColor;
// }

var newColor = document.getElementById("color-field");
var button = document.getElementById("set-color");
var form = document.querySelector("form");
var brush = document.querySelector(".brush");

//create 3 swatches
for(i = 0; i < 3; i++){
	var createSwatches = document.createElement('div');
		document.body.firstElementChild.appendChild(createSwatches).className = "swatch";
}

var swatches = document.querySelectorAll(".swatch");

form.addEventListener("submit", function(event){
	event.preventDefault();
	brush.style.backgroundColor = newColor.value;
	swatches[2].style.backgroundColor = swatches[1].style.backgroundColor;
	swatches[1].style.backgroundColor = swatches[0].style.backgroundColor;
	swatches[0].style.backgroundColor = newColor.value;
})


//create 8000 squares
for(i = 0; i < 8000; i++){
	var createSquares = document.createElement('div');
		document.body.appendChild(createSquares).className = "square";
}

//add swatch clickability to choose old swatch color
for(i=0; i < swatches.length; i++){
	swatches[i].addEventListener("click", function(swatchChoice){
		newColor.value = this.style.backgroundColor;
		brush.style.backgroundColor = this.style.backgroundColor;
	})
}

//paint on hover over the squares
var squares = document.querySelectorAll(".square");
for(i=0; i < 8000; i++){
	squares[i].addEventListener("mouseover", function(paintEvent){
	this.style.backgroundColor = newColor.value;
})
}
