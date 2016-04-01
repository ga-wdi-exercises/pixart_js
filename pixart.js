
$('#set-color').click(function(){
  event.preventDefault();
  $('.brush').eq(0).css('background',$('#color-field').prop('value'));
});


for (var i=0;i<8000;i++) {
  $('body').append($('<div class="square"></div>'));
}

$('.square').mouseover(function(){
  $(this).css('background',$('#color-field').prop('value'));
});
