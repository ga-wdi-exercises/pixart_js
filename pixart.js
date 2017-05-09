var color_field = $("#color-field")
var submit = $("#set-color")
var brush = $(".brush")
var color



var setColor = function(e){
  e.preventDefault()
  color = color_field.val()
  brush.css("background", color)
}

submit.on("click", setColor)
