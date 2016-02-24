var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");
var color = "#1B4370"

button.addEventListener("click", changeColor);
colorField.addEventListener("keypress", enterButtonColor);

function changeColor(event){
      event.preventDefault();
      brush.style.backgroundcolor = color.value;
}

function enterButtonColor() {
  var color = colorField.value;
  brush.style.backgroundcolor = color.value;
}
