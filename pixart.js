var brush = document.querySelector(".brush");
var button = document.querySelector("#set-color");
var form = document.querySelector("#form");

function changeBrushButton(event) {
  event.preventDefault();
  var choice = $("#color-field").val();
  brush.style.backgroundColor = choice;
}

function changeBrushKey(event) {
  if (13 == event.keyCode) {
    var choice = $("#color-field").val();
    brush.style.backgroundColor = choice;
  }
}

button.addEventListener("click", changeBrushButton);
form.addEventListener("keydown", changeBrushKey);
