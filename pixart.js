var setColorButton = document.getElementById("set-color");
var brushDiv = document.querySelector("div.brush");
function changeColor(){
  var color = document.getElementById("color-field").value;
  event.preventDefault();
  brushDiv.style.background = color
}
setColorButton.addEventListener("click", changeColor)
setColorButton.addEventListener("compositionend", changeColor)
