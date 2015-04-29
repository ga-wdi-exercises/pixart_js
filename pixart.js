function setBrushToInputColor(){
	var brush = document.getElementsByClassName("brush")[0];
	var newColor = document.getElementById("color-field").value;
	brush.style.backgroundColor = newColor;
}

function addEvents(){
	var button = document.getElementById("set-color");
	var newColorField = document.getElementById("color-field");
	button.addEventListener("click",
		function(event){ event.preventDefault(); setBrushToInputColor()});
	newColorField.addEventListener("keypress",
		function(event){ var key = event.which; if (key === 13) {setBrushToInputColor;}});
}

function colorBackground(divId) {
	document.getElementById(divId).style.backgroundColor = "green";
}

function appendDivs(divCount){
	for (var i = 0; i < divCount; i++) {
		var div = document.createElement("DIV");
		div.className = "square";
		div.id = "div" + i;
		div.addEventListener("click", function(event) {
			colorBackground(event.srcElement.id);
		})
		document.body.appendChild(div);
	}
}

addEvents();
appendDivs(20);