var setColorButton = $('#set-color');
var swathDiv = $('.brush');
setColorButton.on('click', function(evt){
  evt.preventDefault();
  console.log('click');
  swathDiv.css( 'background-color', 'red');}
);
