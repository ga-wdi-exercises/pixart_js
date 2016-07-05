$(document).ready(function(){
  console.log("JQuery Works!");

  var button = $('button');
  button.on("click", changeColorBox);
  button.on("keypress", changeColorBox);
});

function changeColorBox(evt)
{
  var input=$('input');

  evt.preventDefault();
  //.val() only exists for input fields
  var color = input.val();
  console.log(color);

  $('.brush').css('background',color);
}

for(var i=8000; i>=0; i--)
{
  $("body").append('<div class="square"></div>');
}
var square = $('.square');

function changeColor(evt)
{
  console.log("not green");
  var input = $("input");

  evt.preventDefault();

  var color = input.val();
  // console.log(color);
  $('.square').css("background-color", color);
  // console.log("its green");
}
square.on("mouseover", changeColor);
