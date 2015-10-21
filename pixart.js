$(document).ready(function(){
  //don't reload the page
  event.preventDefault();

  //What color do you want
  var userColor;
  var userColorChoose = function(){
  userColor = $("#color-field").val();
  event.preventDefault();
};
//put this color in the box
var getColor = function(){
  $(".brush").css("background", userColor);
  event.preventDefault();
};
//get the color on button click
$("button").on("click", function(){
  userColorChoose();
  getColor();
});





});
