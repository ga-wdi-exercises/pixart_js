var button = $('button');
var input = $('#color-field');

button.on('click', function(e){
  e.preventDefault()
  $('.brush').css('background', input.val());
});
