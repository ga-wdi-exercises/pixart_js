$(document).ready(function(){

  var setColorButton = $('#set-color')

  var changeColorFunction = function(){
    event.preventDefault()
    console.log('clicked')
  }

  setColorButton.bind('on click keypress',changeColorFunction)
  // setColorButton.on('click', changeColorFunction)
  // setColorButton.keypress(changeColorFunction)
  var squares = $('.square')
  $('body').append(squares)
});
