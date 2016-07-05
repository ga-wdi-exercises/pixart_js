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
//Commit 6 changes 20 to 8000
for(var i=0; i<=8000; i++) {
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
$(this).css("background", "green");
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
  $(this).css("background", color);
}

//Commit 6
$('.square').height(10);
$('.square').width(10);
$('.square').css("margin", 0);

square.on("mouseover", changeColorNotGreen);
