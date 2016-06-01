$("#set-color").on("click", function(e) {
  var color = $("#color-field").val()
  var brush = $(".brush")
  brush.css("background-color", color)
  event.preventDefault()
})
