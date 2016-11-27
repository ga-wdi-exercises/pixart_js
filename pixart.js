
var changeColor = function(){
  event.preventDefault();
  newColor = $('#color-field').val();
  $('.brush').css('background',newColor);
}

$('#set-color').on('click',changeColor);

$('#set-color').keypress(function(e){
  if(e.which == 13){
    changeColor;
  }
})

for(i=1; i<32000; i++){
  $('body').append('<div class="square"></div>');
}

$('body .square').mouseover(function(){
  $(this).css('background',$('#color-field').val());
});
