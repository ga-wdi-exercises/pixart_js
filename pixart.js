
var button = $("#set-color")
var brush = $(".brush")


function change(e) {
  // colorSel.
  var colorSel = $("#color-field").val()
  brush.css("background", colorSel)
  e.preventDefault()

}
button.on("click", change)
