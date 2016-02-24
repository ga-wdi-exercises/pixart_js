/*//clicking buttons to specify the colors.//
var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");
var color = "#1B4370";
//function to run the game from the beginning//
function beginGame() {
  button.addEventListener("click", changeColor);
  colorField.addEventListener("keypress", enterButtonColor);
};
//function to change the color of the box//
function changeColor(){
    var color= colorField.value;
    brush.style.backgroundColor = color;
};
//function to change the color when hit the enter button//

function enterButtonColor() {
  event.preventDefault();
  var color = colorField.value;
  brush.style.backgroundColor = color;
};

// function to CREATE 20 NEW DIVS of class "square"//
function createDivs() {
  for (var i= 0; i<8000; i++) {
  var newDiv = document.createElement("div");
  newDiv.className = "square";
  document.body.appendChild(newDiv);
  newDiv.addEventListener("mouseover", changeDivColor);
};
}
//function to change the color of Div sqaures//
function changeDivColor(){
  this.style.backgroundColor = colorField.value;
};
//run it//
beginGame();
createDivs(); */
var brush = document.querySelector(".brush");
var button = document.querySelector("#set-color");
var colorInput = document.querySelector("#color-field");
var color = "#1B4370";

function startGame() {
  button.addEventListener("click", setColorButton);
  colorInput.addEventListener("keydown", enterColorInput);
};

enterColorInput = function() {
  var color = colorInput.value;

  brush.style.backgroundColor = color;
};

setColorButton = function() {
  event.preventDefault();

  var color = colorInput.value;

  brush.style.backgroundColor = color;
};

createNewBrushes = function() {
  for (var i=0; i<8000; i++) {
    var newBrush = document.createElement("div");
    var page = document.querySelector(".controls");

    newBrush.classList.add("square");

    page.appendChild(newBrush);

    newBrush.addEventListener("mouseover", changeBoxColor);
  };
};

changeBoxColor = function() {
  this.style.backgroundColor = colorInput.value;
};

startGame();
createNewBrushes();
