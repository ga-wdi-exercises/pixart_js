console.log('Hello World!');

// set click the "Set Color" button to change the color of the "brush" box to the color specified in the input field.
//prevent page from refreshing when button is clicked

$('button').on('click', function(inputColor) {
  $('.button').css('background','#set-color');
    event.preventDefault(inputColor);

});

// the code above always allows the page to not refresh when the enter key is pressed by user

// below: create 20 divs of the square class and apprend them to body

var setPieces = function(){
  // $('document').createElement('div');
      for(var i = 0; i < 20; i++) {
  ($('body').append("<div class ='square'></div>"));
  }
};


// functionality: when clicked each square changes the individual color to green


setPieces();
  $('.square').on('click', function (){
    // $(this).css('background', 'green');
    $(this).css('background',$('.brush').css('background'));
  });
