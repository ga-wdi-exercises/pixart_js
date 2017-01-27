
//creat the variable button, and name it, this is my target//
var colorButton = $('button')
//now I have to creat the function, which is colorChange to describe the action//
function colorChange(){
  //prevents the click from reloading the page//
  event.preventDefault();
  //variable to select a color by id/color entered.
  var colorSelected = document.getElementById('color-field').value;
  $('.brush').css('background',colorSelected)
}
//so when i click, the color changes//
colorButton.on('click',colorChange)
