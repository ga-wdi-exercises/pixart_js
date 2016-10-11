$(document).ready(function(){

var setColor = $("#set-color");
var brush = $(".brush");
var colorField = $("#color-field");

  brush.css("background", colorField.val());
  event.preventDefault();

var body = $("body");
for (var i=0; i<20; i++) {
body.append("<div class="square"></div>");
  }
});
