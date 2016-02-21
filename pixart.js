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
  for (var i=0; i<20; i++) {
    var newBrush = document.createElement("div");

    newBrush.className("square");

    newBrush.appendChild(document.body);
  };
};

startGame();
createNewBrushes();
