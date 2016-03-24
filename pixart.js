var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");


function changeBoxColor() {
  event.preventDefault();
  colorBox.setAttribute("value", "");
  brushBox.style.background = colorBox.value;
}

button.addEventListener( "click", changeBoxColor );
