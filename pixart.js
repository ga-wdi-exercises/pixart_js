$(document).ready(function(){
  console.log("JQuery Works!");

  var button = $('button');
  button.on("click", changeColorBox);
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
