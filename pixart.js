var button = $("#set-color");
var brush = $(".brush");
var form = $("#form");
var colorField = $("#color-field")
var square = $(".square")

function changeColor(){
  var color = colorField.val()
  brush.css("background-color" , color)
  event.preventDefault();
}

button.on("click", changeColor)

for(var i = 0; i < 8000; i++){
  var square = $("<div class=square></div>")
  $("body").append(square);

}

function colorDiv(){
 $(this).css("background", colorField.val())

}

$(".square").on("mouseover", colorDiv)
