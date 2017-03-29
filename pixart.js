var inputField = $("#color-field");
var buttonColor = $("#set-color");

function setColor() {
  event.preventDefault();
  $(".brush").css("background", inputField.val());
}

buttonColor.on("click", setColor);
buttonColor.keypress(setColor);
