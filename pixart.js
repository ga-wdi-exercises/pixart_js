var button = document.querySelector("#set-color");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");
var brushList = document.querySelector(".brush-list");
var canvas = document.querySelector(".canvas");
var color = "#1B4370";

startPixart();

function startPixart() {
  button.addEventListener("click", setBrushColor);
  canvas.addEventListener("mouseover", paintSquare);
  canvas.addEventListener("mousedown", function() { event.preventDefault(); this.mouseDown = true;})
  canvas.addEventListener("mouseup", function() { event.preventDefault(); this.mouseDown = false;})
  makeCanvas();
}
