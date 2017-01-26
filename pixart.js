$("#set-color").click(setColor);

function setColor() {
  event.preventDefault()
  var color = $("#color-field").val();
  $(".brush").css("background", color);
}
