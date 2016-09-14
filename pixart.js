
var setColor = $("#set-color")
function changeColor() {
  var color = $("#color-field").val();
  $(".brush").css("background-color", color);
  e.preventDefault();
}
setColor.on("click", changeColor);
