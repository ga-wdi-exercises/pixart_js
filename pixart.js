// Like the A-Team, but with variables
var setColorButton = document.getElementById('set-color');
var inputField= document.getElementById('color-field');
var brushColor = document.querySelector('.brush');
var docForm = document.querySelector('#form');
var bunchaSquaresMaaan = [];
setColorButton.addEventListener( "click", setColor);

function setColor() {
  event.preventDefault();
  brushColor.style.backgroundColor=inputField.value;
}

for (i=0; i < 20; i++){
  bunchaSquaresMaaan[i]=document.body.appendChild(document.createElement("div"));
  bunchaSquaresMaaan[i].className="square";
}
