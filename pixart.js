var button = $("#set-color")

var colorField = $("#color-field")

function changeColor(){
  var color = colorField.val()
  $(".brush").css("background", color);
  event.preventDefault()
}
button.on("click", changeColor);
