var setColorButton = document.getElementById("set-color");
var brushBox = document.querySelector(".brush");
var userInput = document.getElementById("color-field");

setColorButton.addEventListener("click", function(evt) {
  brushBox.style.background = userInput.value;
  // Why does the color reset without preventDefault() ??
  evt.preventDefault();
});
