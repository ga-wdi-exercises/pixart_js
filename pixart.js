$(document).ready(function() {
  console.log("hewwo?!")

  var button = $('button');
  button.on("click", changeColorBox);
  button.on("keypress", changeColorBox);

});

function changeColorBox(evt) {
  //Define input within the function to avoid 'input' isn't defined error
  var input = $('input');

  evt.preventDefault();
  //.val() is for input fields
  var color = input.val();
  console.log(color);

  $(".brush").css("background", color);
}

//Commit 3
for(var i=0; i<=20; i++) {
  $('body').append('<div class="square"></div>');
  console.log("WTF");
}

//Commit 4
var square = $('.square');
square.on("click", changeColorNotGreen);

//Commit 4 (continued)
/*
function changeColorGreen() {
  console.log("Green Color");
  $('.square').css("background", "green");
}
*/

//Commit 5
function changeColorNotGreen(evt) {
  console.log("Not Green");

  //Define input
  var input = $('input');

  evt.preventDefault();
  //.val() is for input fields
  var color = input.val();
  $('.square').css("background", color);
}
