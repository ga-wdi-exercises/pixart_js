function createSquares(num){
  for (var i = 0; i < num; i++) {
    var square = $("<div></div>");
    square.addClass("square")
    $("body").append(square)
  }
}

var i = 0;

function changeColor(){
  event.preventDefault();
  var userInput = document.getElementById("color-field").value;
  $(".brush").css("background", userInput)
  if (i == 0) {
    $(".swatch").eq(0).css("background", userInput)
    i++;
  } else if (i == 1) {
    $(".swatch").eq(1).css("background", userInput)
    i++;
  } else if (i == 2) {
    $(".swatch").eq(2).css("background", userInput)
    i = 0;
  }
}

createSquares(8000);

$("button").click(changeColor)
$(".square").mouseover(function(){
  var selectedColor = $(".brush").css("background");
  $(this).css("background", selectedColor)
})
$(".swatch").click(function(){
  var swatchColor = $(this).css("background");
  $(".brush").css("background", swatchColor)
})
