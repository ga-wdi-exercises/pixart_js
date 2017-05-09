var color_field = $("#color-field")
var submit = $("#set-color")
var brush = $(".brush")
var body = $("body")
var color



var setColor = function(e){
  e.preventDefault()
  color = color_field.val()
  brush.css("background", color)
}

submit.on("click", setColor)
//submit.on(13, setColor)

for (var i = 0; i < 8000; i++) {
  var square = $("<div></div>")
  square.addClass("square")
  body.append(square)
}

$(".square").on("mouseover", function(){
  $(this).css("background",color)
})
