var brush = document.querySelector(".brush");
var button = document.querySelector("#set-color");

function changeBrush(event) {
  event.preventDefault();
  var choice = $("#color-field").val();
  brush.style.backgroundColor = choice;
}

button.addEventListener("click", changeBrush);
