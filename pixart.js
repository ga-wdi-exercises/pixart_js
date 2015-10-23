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

function setBrushColor(event) {
  event.preventDefault();
  color = colorField.value;
  brush.style.backgroundColor = color;
  addBrushToHistory(color);
}

function addBrushToHistory(brushColor) {
  var newBrush = document.createElement("div")
  newBrush.classList.add("past-brush");
  newBrush.style.backgroundColor = brushColor;
  newBrush.addEventListener("click", updateBrushFromHistory);

  brushList.appendChild(newBrush);
  if (brushList.querySelectorAll(".past-brush").length > 3) {
    brushList.children[0].remove();
  }
}
