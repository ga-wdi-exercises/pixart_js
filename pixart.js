function preventDef(event) {
  event.preventDefault();
}
var color = "1B4370";
var setColor = document.getElementById("set-color");
var brush = document.querySelector(".brush");
var input = document.getElementById("color-field");

function colorChange() {
	var newColor = input.value;
	brush.style.backgroundColor = newColor;
}

//commit 2: This already works with both clicking the submit button and pressing the enter key. Was I supposed to do something else?
setColor.addEventListener("click", preventDef);
setColor.addEventListener("click", colorChange);

function makeDivs(){
  for(var x = 0; x < 20; x++){
    var newSquare = document.createElement("DIV");
    newSquare.className = "square";
    newSquare.id = x;
    document.querySelector("body").appendChild(newSquare);
  }
}

//commit 3: makin' 20 divs
makeDivs();

var squares = document.querySelectorAll(".square");
var varNames = [];
for(var x = 0; x < squares.length; x++) {
	varNames.push("square" + x);
}

var squareVariables = {}
for (var x = 0; x < varNames.length; x++){
  squareVariables[varNames[x]] = document.getElementById(x);
}

function paintSquare() {

}








