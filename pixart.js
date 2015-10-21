var setColorButton = $('#set-color');
var inputSelector = $('#color-field');
var swathDiv = $('.brush');
setColorButton.on('click', function(evt){
  evt.preventDefault();
  console.log('click');
  swathDiv.css( 'background-color', inputSelector.val());}
);

for(var a=0;a<8000;a++){
  $('body').append("<div class='square'></div>");
}

$('.square').on('click',function(evt){
  console.log('div clicked');
  console.log(evt);
  evt.toElement.style.color='red';
});
