//clicking buttons to specify the colors.//
var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");
var color = "#1B4370"

button.addEventListener("click", changeColor);
colorField.addEventListener("keypress", enterButtonColor);

function changeColor(event){
      event.preventDefault();
      brush.style.backgroundcolor = color.value;
}
//specify colors when hit the enter button//

function enterButtonColor() {
  var color = colorField.value;
  brush.style.backgroundcolor = color.value;
}

//CREATE 20 NEW DIVS of class "square"//
function createDivs() {
  for (var i= 0; i<20; i++) {
  var newDiv = document.createElement("div");
  newDiv.className = "square";
  document.body.appendChild(newDiv);
  newDiv.addEventListener("click", changeDivColor);
};
}

function changeDivColor(){
  newDiv.style.background = color.value;
};

///function to start the whole game
function startGame(){
  button.addEventListener("click", changeColor);
  colorField.addEventListener("keypress", enterButtonColor);
};
