function preventDef(event) {
  event.preventDefault();
}

var setColor = document.getElementById("set-color");
var brush = document.querySelector(".brush");
var input = document.getElementById("color-field");

function colorChange() {
	var newColor = input.value;
	brush.style.backgroundColor = newColor;
}

setColor.addEventListener("click", preventDef);
setColor.addEventListener("click", colorChange);

//commit 2: This already works with both clicking the submit button and pressing the enter key. Was I supposed to do something else?

function makeDivs(){
  for(var x = 0; x < 20; x++){
    var square = document.createElement("DIV");
    square.className = "square";
    document.querySelector("body").appendChild(square);
  }
}

makeDivs();