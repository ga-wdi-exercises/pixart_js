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
  for (i = 0; i < 8001; i++) {
    $("body").append("<div class='square'></div>");
  } //ends for loop
}
divCreator();
// grab divs with class of square
// put a click event on each div with a class of square
// when it is clicked, the background color is changed to green;

$(".square").on("mouseover", function() {
  $(this).css("background-color", "green");
}) //ends click event for div of class square




}); //ends document.ready

// Commit 6 should not tell you to modify the CSS square class to width and height of 10px because that was the default.
