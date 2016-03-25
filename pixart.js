var setColorButton = document.querySelector("#set-color");
var inputColor = document.querySelector("#color-field");
var input = document.querySelector("#color-field");
var brush = document.querySelector(".brush");




function setColor(event) {
  event.preventDefault();
  brush.style.backgroundColor = input.value;
}


setColorButton.addEventListener("click", setColor);
