var button = $("#set-color")

var colorField = $("#color-field")

function changeColor(){
  var color = colorField.val()
  $(".brush").css("background", color);
  event.preventDefault()
}
button.on("click", changeColor);


for (i=0; i <21; i++) {
  var square = $("<div class = square>square</div");
  $("body").append(square)
};

// function() {
//   $(".square").on("click", $(".square").css("background-color", "green"))
// }

$(".square").on("click", changeColorDiv)

function colorDiv(){
  $(this).css("background", "green")
}
function changeColorDiv(){
  var color = colorField.val()
  // $(".brush").css("background", color);
  $(this).css("background", color)
  event.preventDefault()
}
