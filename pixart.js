var input = document.getElementById("color-field");
document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	document.getElementsByClassName("brush")[0].style.backgroundColor= input.value;
});

for (i=0; i<19; i++) {
	var addSquare= document.createElement('DIV');
	document.body.appendChild(addSquare);
	addSquare.className= "square";
}

