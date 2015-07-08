$(document).ready (function() {

})
// set brush to color, get from color field, listen for button click, handle body clicks
$("button").on("click", function(event){
  event.preventDefault();
  var newColor = $("#color-field").val();
  console.log(newColor);
  $(".brush").css("background-color", newColor);

})
