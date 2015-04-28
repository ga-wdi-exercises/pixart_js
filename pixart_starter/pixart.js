var input = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	var classy = document.getElementsByClassName("brush")[0];
	classy.style.background = input.value;
});
for(var i = 0; i < 19; ++i){
var addSquare = document.createElement('div');
	document.body.appendChild(addSquare);
	addSquare.className = "square";
}