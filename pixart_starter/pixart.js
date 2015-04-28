var input = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	console.log(input.value);
	var classy = document.getElementsByClassName("brush")[0];
	console.log(classy)
	classy.style.background = input.value;
});
