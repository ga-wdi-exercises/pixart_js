
var changeColor = function(){
  event.preventDefault();
  newColor = $('#color-field').val();
  $('.brush').css('background',newColor);
}

$('#set-color').on('click',changeColor);
