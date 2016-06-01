$("#set-color").on("click", function() {
  var color = $("#color-field").val()
  var brush = $(".brush")
  brush.css("background-color", color)
  event.preventDefault()
})

var counter = 0
while(counter < 8001){
  var square = "<div class='square'></div>"
  $("body").append(square)
  counter++
}

$(".square").on("click", function(){
    $(this).css("background-color", "green");
})
