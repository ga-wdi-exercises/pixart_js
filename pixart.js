var button = $("#set-color");
var mouseBrush = $(".brush");
var inputBox = $("#color-field");

button.on("click", changeColor);

function changeColor() {
  mouseBrush.css("background", inputBox.val());
  event.preventDefault();
}

$("body").append("<div class=square></div>");

for (i = 0; i < 8000; i++) {
  $("body").append("<div class=square></div>");
}

$(".square").on("mouseover", changeToGreen);

function changeToGreen() {
  $(this).css("background", inputBox.val());
}
