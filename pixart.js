var brush = document.querySelector(".brush");
var button = document.querySelector("#set-color");
var colorInput = document.querySelector("#color-field");
var color = "#1B4370";

function startGame() {
  button.addEventListener("click", setColor);
  colorInput.addEventListener("keydown", enterColor);
}

enterColor = function() {
  var color = colorInput.value;

  brush.style.backgroundColor = color;
}

setColor = function() {
  event.preventDefault();

  var color = colorInput.value;

  brush.style.backgroundColor = color;
};

startGame();
