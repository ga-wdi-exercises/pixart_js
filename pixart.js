var setColor = $("#set-color");
var colorField = $("#color-field");

function changeColor () {
  event.preventDefault()
  $(".brush").css("background", colorField.val());
}

setColor.on("click", changeColor);
setColor.keypress(changeColor);
