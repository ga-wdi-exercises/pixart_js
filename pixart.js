$(document).ready(function (){

// // Put a click event handler on the button Set Color
// // Get value from input?
// // Replace background color of brush box with input from form
$("#set-color").on("click", function(event) {
  var userColor = $("#color-field").eq(0).val();
  $("div.brush").css("background-color", userColor);
  event.preventDefault();
}); //end input on click event handler



function divCreator() {
  for (i = 0; i < 20; i++) {
    $("body").append("<div class='square'></div>");
  } //ends for loop
}
divCreator();

// $("body").append("<div>Hi</div>");







}); //ends document.ready
