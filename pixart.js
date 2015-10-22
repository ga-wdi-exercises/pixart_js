$('#set-color').on('click', function(evt) {
  evt.preventDefault();
  $('.brush').css('background', $('.input').val());
})

$('#set-color').on('keypress', function(evt) {
  evt.preventDefault();
  $('.brush').css('background', $('.input').val());
})
