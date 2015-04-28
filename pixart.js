var input = document.getElementById("color-field");
document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	console.log(input.value);
	document.getElementsByClassName("brush")[0].style.backgroundColor= input.value;
});


