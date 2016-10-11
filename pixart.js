var input = $("#color-field");
var button = $("#set-color");
var brush = $(".brush");

function changeColor() {
  brush.css("background", input.val());
  event.preventDefault();
}

button.on("click", changeColor);
