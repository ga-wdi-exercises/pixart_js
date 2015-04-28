var input = document.getElementById("color-field");
document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	document.getElementsByClassName("brush")[0].style.backgroundColor= input.value;
});

for (var i=0; i<19; i++) {
	var addSquare= document.createElement('DIV');
	document.body.appendChild(addSquare);
	addSquare.className= "square";
}

var squares = document.getElementsByClassName('square');
for (var j=0; j<squares.length; j++){
	document.getElementsByClassName("square")[j].addEventListener("click", function(evt){
		var color = document.getElementsByClassName("brush")[0].style.backgroundColor;
		console.log(color);
		evt.toElement.style.backgroundColor= color;
	});
}