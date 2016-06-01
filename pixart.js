$(document).on("ready", function(){

var brush = $(".brush");
var setColor = $("#set-color");
var colorInput = $("#color-field");
var form = $("#form");


form.on("submit", function(form){
  form.preventDefault();
  brush.css("background", colorInput.val());
})

var counter = 0
while(counter < 8001){
  var square = "<div class='square'></div>"
  $("body").append(square)
  counter++
}

$(".square").on("mouseover", function(){
  $(this).css("background", colorInput.val());
})


})
