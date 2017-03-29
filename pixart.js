$(document).ready(function(){
  /////
  var setColorButton = $('#set-color')
  // setColorButton.on('click', changeColorFunction)
  // setColorButton.keypress(changeColorFunction)
  setColorButton.bind('on click keypress', setColorFunction)

  var setColorFunction = function(){
    event.preventDefault()
    console.log('clicked')
  }
  /////

  for(var i = 0; i < 8000; i++) {
    var square = $('<div class="square"></div>');
    $('body').append(square);
  }
});
