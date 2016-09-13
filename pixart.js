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


for(i = 0; i < 20; i++){
  var div = $('<div></div>').addClass('square')
  $('body').append(div)
}

$('.square').on('click', function(){
  $(this).css('background', 'green')
})
