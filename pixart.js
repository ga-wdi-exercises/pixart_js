// Variable for the form where the user picks a color
var form = document.getElementById('form');

// Variable for the field where inputs a color name
var input = document.querySelector('#color-field');

// Variable for the "swatch" displaying the current paint color
var brush = document.querySelector('.brush');

// Variable for the region where the user paints
var canvas = document.getElementById('canvas');

form.addEventListener('submit', function(event){
  // Listen for the user to click the button to set the color

  // Don't allow the defaukt behavior for a button press to happen
  event.preventDefault();

  // Set the brush to the color the user selected. There's no error checking;
  // if an "impossible" color is selectedm, the previous color stays
  brush.style.backgroundColor = input.value;
});

for( var i = 0; i < 4440; i++){ // Creste the canvas for drawing, essentially
                                // 4440 pixels
  // Create a div element
  var div = document.createElement('div');

  // Add the class square to the div
  div.classList.add('square');

  // Add a mouseover listener to the div
  div.addEventListener('mouseover', function(){

    // When the mouse passes over the element, change its color
    // to the current brush color
    this.style.backgroundColor = brush.style.backgroundColor;
  });
  // Actually put the div on the canvas
  canvas.appendChild(div);
}
