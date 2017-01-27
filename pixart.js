var form = document.getElementById('form');  //get form element
var input = document.querySelector('#color-field');  // select color-field element
var brush = document.querySelector('.brush');   // select brush class
var canvas = document.getElementById('canvas');  // get canvas element

form.addEventListener('submit', function(event){   // listens for click or enter key
  event.preventDefault();                          // prevent the form from actually submitting
  brush.style.backgroundColor = input.value;       // change the background color of brush class
});

for( var i = 0; i < 4440; i++){                    // run 4400 times
  var div = document.createElement('div');         // create a variable that contains a "div" objecct
  div.classList.add('square');                     // add the "square" class attribute
  div.addEventListener('mouseover', function(){    // add listener to change the background style on mouseover
    this.style.backgroundColor = brush.style.backgroundColor;
  });
  canvas.appendChild(div);                         // add the new element by appending it to the canvas element
}
