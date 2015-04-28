// var color = document.getElementById("color-field").value;
// var newColor = document.forms["form"]["color-field"].value;
// console.log(newColor);
// function switchColor(){
// 	document.getElementsByClassName("brush").style.backgroundColor = newColor;
// }

var button = document.getElementById("set-color");
button.addEventListener("click", function(myEvent){
	myEvent.preventDefault();
	console.log("Hi");
	var newColor = document.getElementById("color-field").value;
	console.log(newColor);
	document.querySelector(".brush").style.backgroundColor = newColor;
})
