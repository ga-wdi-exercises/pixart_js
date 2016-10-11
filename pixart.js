$(document).ready(function(){

var setColor = $("#set-color");
var brush = $(".brush");
var colorField = $("#color-field");

setColor.on("click", changeColor);

function changeColor (){
  brush.css("background", colorField.val());
  event.preventDefault();
  }
});
