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


console.log("Hi");
console.log(newColor);

form.addEventListener("submit", function(event){
	event.preventDefault();
	brush.style.backgroundColor = newColor.value;
})

//create 8000 squares
for(i = 0; i < 8000; i++){
	var createSquares = document.createElement('div');
		document.body.appendChild(createSquares).className = "square";
}
//paint on hover over the squares
var squares = document.querySelectorAll(".square");
for(i=0; i < 8000; i++){
	squares[i].addEventListener("mouseover", function(paintEvent){
	this.style.backgroundColor = newColor.value;
})
}
