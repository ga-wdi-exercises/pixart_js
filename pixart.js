  $('#set-color').on('click', function(evt) {
    evt.preventDefault();
    $('.brush').css('background', $('.input').val());
  })
