// Like the A-Team, but with variables
var setColorButton = document.getElementById('set-color');
var inputField= document.getElementById('color-field');
var brushColor = document.querySelector('.brush');
var docForm = document.querySelector('#form');
setColorButton.addEventListener( "click", setColor);

function setColor() {
  event.preventDefault();
  brushColor.style.backgroundColor=inputField.value;
}
