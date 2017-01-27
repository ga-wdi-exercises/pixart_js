console.log('Hello World!');

// set click the "Set Color" button to change the color of the "brush" box to the color specified in the input field.
//prevent page from refreshing when button is clicked

$('button').on('click', function(inputColor) {
  $('.button').css('background','#set-color');
    event.preventDefault(inputColor);
});
