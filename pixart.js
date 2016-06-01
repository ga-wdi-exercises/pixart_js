
$("#set-color").on("click", changeColor);
var colorInput = $("#color-field");

function changeColor() {
  event.preventDefault();
  $(".brush").css("background-color", colorInput.val());
}
