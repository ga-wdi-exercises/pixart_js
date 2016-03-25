// Like the A-Team, but with variables

var setColorButton = document.getElementById('set-color');
var inputField= document.getElementById('color-field');
var brushElement = document.querySelector('.brush');
//var style = document.getComputedStyle(brushElement, null);
var brushColor = "#1B4370";
console.log("brush color is "+brushColor)
var bunchaSquaresMaaan = [];

setColorButton.addEventListener( "click", setBrush);

function setBrush() {
  event.preventDefault();
  brushElement.style.backgroundColor=inputField.value;
}

for (i=0; i < 8000; i++){
  bunchaSquaresMaaan[i]=document.body.appendChild(document.createElement("div"));
  bunchaSquaresMaaan[i].className="square";
  bunchaSquaresMaaan[i].addEventListener("mouseover", setSquareColor)
}

function setSquareColor () {
  //brushColor = brushElement.style.backgroundColor;
  if (brushElement.style.backgroundColor) {
    brushColor=brushElement.style.backgroundColor;
  }
  this.style.backgroundColor= brushColor;
  console.log("welp");
}
