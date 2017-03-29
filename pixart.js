var colorButton = $("#set-color")

var colorField = $("#color-field")


colorButton.on("click", function() {
  event.preventDefault()
  $(".brush").css("background-color", colorField.val())
})
