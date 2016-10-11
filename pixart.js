$(document).ready(function(){

var setColor = $("#set-color");
var brush = $(".brush");
var colorField = $("#color-field");

// setColor.on("click", changeColor);

// function changeColor (){
  brush.css("background", colorField.val());
  event.preventDefault();
//   }
//   colorField.on("keyup", changeColor);

for (i=0; i<20; i++) {
  $("body").append("<div class=square></div>");
  }
var square = $(".square");
square.on("click", function(){
  $(this).css("background", "green");
})
});
