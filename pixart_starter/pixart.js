var input = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	var classy = document.getElementsByClassName("brush")[0];
	classy.style.background = input.value;
});

for(var i = 0; i < 20000; i++){
var addSquare = document.createElement('div');
	document.body.appendChild(addSquare);
	addSquare.className = "square";
}

var squares = document.getElementsByClassName("square");


for (var j = 0; j < squares.length; j++){
	document.getElementsByClassName("square")[j].addEventListener("mouseover", function(evt){
	var color = document.getElementsByClassName("brush")[0].style.backgroundColor;
	if(color === ""){
		color = "red";
	}
	evt.toElement.style.backgroundColor = color;
})
}