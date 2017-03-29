$(document).ready(function(){

  var setColorButton = $('#set-color')
  var inputVal = $('#form input')
  var colorBox = $('.brush')


  var setColorFunction = function(){
    event.preventDefault()
    console.log('clicked')
    colorBox.css('background',inputVal.val())
  }
  // setColorButton.on('click', changeColorFunction)
  // setColorButton.keypress(changeColorFunction)
  setColorButton.bind('on click keypress', setColorFunction)

  for(var i = 0; i < 8000; i++) {
    var square = $('<div class="square"></div>');
    $('body').append(square);
  }

  $('.square').mouseover('click',function(){
    $(this).css('background',inputVal.val());
  })
});
