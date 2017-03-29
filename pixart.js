var inputField = $("#color-field");
var buttonColor = $("#set-color");

function setColor() {
  event.preventDefault();
  $(".brush").css("background", inputField.val());
}

buttonColor.on("click", setColor);
buttonColor.keypress(setColor);

for (var i = 0; i < 20; i++) {
  $("body").append("<div class=square></div>");
}

$(".square").on("click", changeToGreen);

function changeToGreen() {
  $(this).css("background", "green");
}
