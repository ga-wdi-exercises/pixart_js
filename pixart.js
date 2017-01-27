//clicking buttons to specify the colors.//
var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");
var color = "#1B4370";
//function to run the game from the beginning//
function beginGame() {
  button.addEventListener("click", changeColor);
  colorField.addEventListener("mouseover", enterButtonColor);
};
//function to change the color of the box//
function changeColor(){
    event.preventDefault();
    var color= colorField.value;
    brush.style.backgroundColor = color;
};
//function to change the color when hit the enter button//

function enterButtonColor() {
  var color = colorField.value;
  brush.style.backgroundColor = color;
};

// function to CREATE 20 NEW DIVS of class "square"//
var createDivs = function() {
  for (i= 0; i<8000; i++) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
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
createDivs();
