
var anyColor = $("#set-color")
function changeColor() {
  var color = $("#color-field").val();
  $(".brush").css("background-color", color);
  e.preventDefault();
}
anyColor.on("click", changeColor);
