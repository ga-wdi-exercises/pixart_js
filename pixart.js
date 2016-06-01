$("#set-color").on("click", function() {
  var color = $("#color-field").val()
  var brush = $(".brush")
  brush.css("background-color", color)
  event.preventDefault()
})

var counter = 0
while(counter < 21){
  var square = "<div class='square'></div>"
  $("body").append(square)
  counter++
}
