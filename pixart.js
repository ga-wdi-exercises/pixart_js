// get input colorl val
// set color


$('#set-color').on('click', function(evt){
  var color = $('input').val()
  $('.brush').css('background', color)
  evt.preventDefault();
})

$('#set-color').on('keypress', 'enter', function(evt){
  var color = $('input').val()
  $('.brush').css('background', color)
  evt.preventDefault();
})
