$(document).ready(function(){
  /////
  var setColorButton = $('#set-color')
  // setColorButton.on('click', changeColorFunction)
  // setColorButton.keypress(changeColorFunction)

  var setColorFunction = function(){
    event.preventDefault()
    console.log('clicked')
  }
  setColorButton.bind('on click keypress', setColorFunction)
  /////

  for(var i = 0; i < 8000; i++) {
    var square = $('<div class="square"></div>');
    $('body').append(square);
  }

  // var colorSquare = function (){
  //   square.css('background','green')
  //   console.log('clicked')
  // }

  $('.square').on('click',function(){
    $(this).css('background','green');
  })
});
