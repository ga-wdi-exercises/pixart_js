$(document).ready(createCanvas);

function createCanvas () {
  // Create pixels contained within the div .canvas
  for (var i = 0; i < 20; i++) {
    $('.canvas').append("<div class=\"pixel\" id=\""+i+"pixel\"></div>");
  }
  // Click set color button to change the current color to the color input.
  $('#setColor').on('click', function(evt) {
    evt.preventDefault();
    var newColor = $('#colorInput').val()
    $('#brushColor').css('background-color', newColor);
  });
  // Click pixel to change color to green.
  $('.pixel').on('click', function () {
    var newColor = $('#brushColor').css('background-color');
    $(this).css('background-color', newColor);
  });
}
