$('#form').on('click', function(evnt){
  evnt.preventDefault();
  var color = $('#color-field').val();
  $('.brush').css('background', color);
})
