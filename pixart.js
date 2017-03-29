var colorButton = $("#set-color")

var colorField = $("#color-field")


colorButton.on("click", function() {
  event.preventDefault()
  $(".brush").css("background-color", colorField.val())
})
for (var i = 0; i < 8000; i++) {
  var square = $('<div class="square"></div>');
  $('body').append(square);
}
