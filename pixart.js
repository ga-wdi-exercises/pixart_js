$(document).ready(createCanvas);

function createCanvas () {
  // Create pixels contained within the div .canvas
  for (var i = 0; i < 8000; i++) {
    $('.canvas').append("<div class=\"pixel\" id=\""+i+"pixel\"></div>");
  }
  // Click set color button to change the current color to the color input.
  $('#setColor').on('click', function(evt) {
    evt.preventDefault();
    // Set lastColor 2 to lastColor1 color
    $('#lastColor2').css('background-color', $('#lastColor1').css('background-color'));
    // Set lastColor 1 to previous color
    $('#lastColor1').css('background-color', $('#brushColor').css('background-color'));
    // Set current color to color input
    var newColor = $('#colorInput').val()
    $('#brushColor').css('background-color', newColor);
  });
  // Click recently used colors to change brushColor to that color
  $('#lastColor1').on('click', function() {
    $('#brushColor').css('background-color', $(this).css('background-color'));
  });
  $('#lastColor2').on('click', function() {
    $('#brushColor').css('background-color', $(this).css('background-color'));
  });
  // Click pixel to change color to brushColor
  $('.pixel').on('mouseover', function () {
    var newColor = $('#brushColor').css('background-color');
    $(this).css('background-color', newColor);
  });
}
