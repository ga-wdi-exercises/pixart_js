$(document).ready(function (){

// // Put a click event handler on the button Set Color
// // Get value from input?
// // Replace background color of brush box with input from form
$("#set-color").on("click", function(event) {
  var userColor = $("#color-field").eq(0).val();
  $("div.brush").css("background-color", userColor);
  event.preventDefault();
}); //end on event handler


}); //ends document.ready
