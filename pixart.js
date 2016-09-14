var button = $("#set-color");
var brush = $(".brush");
var form = $("#form");
var colorField = $("#color-field")

function changeColor(){
  var color = colorField.val()
  brush.css("background-color" , color)
  event.preventDefault();
}

button.on("click" , changeColor) 
