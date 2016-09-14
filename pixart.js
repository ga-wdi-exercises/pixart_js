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

for(var i = 0; i < 20; i++){
  var newDiv = $("<div class='square'></div>")
  $("body").append(newDiv);
}
