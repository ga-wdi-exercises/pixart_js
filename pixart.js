var input = document.getElementById("color-field");
document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	document.getElementsByClassName("brush")[0].style.backgroundColor= input.value;
});

for (var i=0; i<8000; i++) {
	var addSquare= document.createElement('DIV');
	document.body.appendChild(addSquare);
	addSquare.className= "square";
}

var squares = document.getElementsByClassName('square');
for (var j=0; j<squares.length; j++){
	document.getElementsByClassName("square")[j].addEventListener("mouseover", function(evt){
		var color = document.getElementsByClassName("brush")[0].style.backgroundColor;
		if (color === ""){
			color= "blue";
		}
		evt.toElement.style.backgroundColor= color;
	});
}