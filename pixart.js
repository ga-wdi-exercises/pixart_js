var inputField = $("#color-field");
var buttonColor = $("#set-color");

function setColor() {
  event.preventDefault();
  $(".brush").css("background", inputField.val());
}

buttonColor.on("click", setColor);
buttonColor.keypress(setColor);

for (var i = 0; i < 3; i++) {
  $(".swatches").append("<div class=brush></div>");
  $(".swatches").css({"display": "flex", "flex-direction": "row"});
}

for (var i = 0; i < 8000; i++) {
  $("body").append("<div class=square></div>");
}

$(".square").on("mouseover", changeToGreen);

function changeToGreen() {
  $(this).css("background", inputField.val());
}
