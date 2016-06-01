
$("#set-color").on("click", changeColor);
var colorInput = $("#color-field");

//changing color of one box by inputing color
function changeColor() {
  event.preventDefault();
  $(".brush").css("background-color", colorInput.val());
}


//creating divs and appending them
for (var i =1 ; i < 800; i++) {

  $("body").append("<div class='square'></div>");

}

//commit 4
$(".square").on("mouseover", colorChange);
function colorChange() {
  $(this).css("background-color", colorInput.val());
}
