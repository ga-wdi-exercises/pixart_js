var setColorButton = $('#set-color');
var inputSelector = $('#color-field');
var swathDiv = $('.brush');
setColorButton.on('click', function(evt){
  evt.preventDefault();
  console.log('click');
  swathDiv.css( 'background-color', inputSelector.val());}
);
