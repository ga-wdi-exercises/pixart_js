var form = document.getElementById('form');         //Sets the "set color" form as a variable
var input = document.querySelector('#color-field'); //Sets the input text of the "set color" form as a variable
var brush = document.querySelector('.brush');       //Sets the "set color" visual indicator "brush" as a variable
var canvas = document.getElementById('canvas');     //Sets the "canvas", which contains the pixel art color results as a variable

$('form').on('click', function(){                   //Gives the form variable functionality when clicked
  event.preventDefault();                           //Prevents the function from performing a default event
  brush.style.backgroundColor = input.value;        //Gives the brush variable a background color from any input (e.g. the value from the "set color" form)
});
