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
