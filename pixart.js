
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
