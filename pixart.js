$(document).ready(function(){

var button = $("#set-color")
var colorField = $("#color-field")
var brush = $(".brush")
var color = "#1B4370"

function setColor(event){
  event.preventDefault();
  var newColor = colorField.val();
  brush.css({
    "background": newColor
  })
  color = newColor
}

button.on("click", setColor);

for(var pixel = 0; pixel < 21; pixel++){
  var squareDiv = $("<div></div>").addClass("square");
  squareDiv.on("click", function() {
    $(this).css("background-color", color)
    });
  $("body").append(squareDiv);
}

})
