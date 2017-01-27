var button = $('#set-color')
var brush = $('.brush')
var colorField = $('#color-field')
var square = $('.square')
var first = $('#first')
var second = $('#second')
var third = $('#third')
var holderColor = null

button.on('click',function(){
  setColor();
  return false;
})
colorField.on('keypress', function(e){
    if (e.keyCode == 13) {
      setColor();
    }
});
$('.history').children().on('click',function(){
  holderColor = $(this).css('background')
  $(this).css('background',brush.css('background'))
  brush.css('background',holderColor)
})

function setColor(){
  third.css('background',second.css('background'));
  second.css('background',first.css('background'));
  first.css('background',brush.css('background'));
  brush.css('background',colorField.val());

}

for (i=0; i<8000; i++) {
  $('body').append('<div class="square"></div>');
}

$('body').children('.square').on('mouseover', function(){$(this).css('background',brush.css('background'))})
