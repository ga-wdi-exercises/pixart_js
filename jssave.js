function setBrushToInputColor(){
	var brush = document.getElementsByClassName("brush")[0];
    color = document.getElementById("color-field").value;
	brush.style.backgroundColor = color;
}

function addEvents(){
	var button = document.getElementById("set-color");
	var newColorField = document.getElementById("color-field");
	button.addEventListener("click",
		function(event){ event.preventDefault(); setBrushToInputColor()});
	newColorField.addEventListener("keypress",
		function(event){ var key = event.which; if (key === 13) {setBrushToInputColor;}});
}

function colorSquare(divId) {
	document.getElementById(divId).style.backgroundColor = color;
}

function appendDivs(divCount){
	for (var i = 0; i < divCount; i++) {
		var div = document.createElement("DIV");
		div.className = "square";
		div.id = "div" + i;
		div.addEventListener("mouseover", function(event) {
			colorSquare(event.srcElement.id);
		})
		document.body.appendChild(div);
	}
}

color = window.getComputedStyle(
	document.getElementsByClassName("brush")[0])["background-color"];
addEvents();
appendDivs(8000);
