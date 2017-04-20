// get input colorl val
// set color
var counter = 0

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

for (i = 1; i < 3; i++){
  var div = $('<div></div>').addClass('brush')
  $('.controls').append(div)
}

for(i = 0; i < 8000; i++){
  var div = $('<div></div>').addClass('square')
  $('body').append(div)
}

// $('#set-color').on('click', function(){
//   if($('.brush').eq(counter%3 == 0)){
//     color
//     $('.brush').css('background', color)
//   }
// })



$('.brush').wrapAll('<div class="wrapper">')
$('.wrapper').css('display', 'flex')


$('.square').on('mouseover', function(){
  var color = $('input').val()
  $(this).css('background', color)
})
