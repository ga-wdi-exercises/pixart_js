var form = document.getElementById('form');         //Sets the "set color" form as a variable
var input = document.querySelector('#color-field'); //Sets the input text of the "set color" form as a variable
var brush = document.querySelector('.brush');       //Sets the "set color" visual indicator "brush" as a variable
var canvas = document.getElementById('canvas');     //Sets the "canvas", which contains the pixel art color results as a variable

$('form').on('click', function(){                   //Gives the form variable functionality when clicked
  event.preventDefault();                           //Prevents the function from performing a default event
  brush.style.backgroundColor = input.value;        //Gives the brush variable a background color from any input (e.g. the value from the "set color" form)
});

for( var i = 0; i < 8000; i++){                     //Loops var i 8000 times
  var div = document.createElement('div');          //Sets all divs as a variable
  div.classList.add('square');                      //Gives all those divs the attribute value's set from the square's css
  div.addEventListener('mouseover', function(){     //Gives the divs functionality when the mouse move over them
    this.style.backgroundColor = brush.style.backgroundColor; //Gives whatever mouseovered div the background color set from the brush variable
  });
  canvas.appendChild(div);                          //Adds one div node after another in the canvas div
}
