
var setColor = $("#set-color")
function changeColor() {
  var color = $("#color-field").val();
  $(".brush").css("background-color", color);
  e.preventDefault();
}
setColor.on("click", changeColor);

var addDiv = $("<div class='square'></div>")
for (var i = 0; i < 21; i++){
  $("body").append("<div class='square'></div>");
}
