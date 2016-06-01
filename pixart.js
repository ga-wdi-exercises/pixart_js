$(document).on("ready", function(){

var brush = $(".brush");
var setColor = $("#set-color");
var colorInput = $("#color-field");
var form = $("#form");


form.on("submit", function(form){
  form.preventDefault();
  brush.css("background", colorInput.val());
})


})
