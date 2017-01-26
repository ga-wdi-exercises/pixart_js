var button = $('#set-color')
var brush = $('.brush')
var colorField = $('#color-field')
var square = $('.square')

button.on('click',function(){
  brush.css('background',colorField.val());
  return false;
})
colorField.on('keypress', function(e){
    if (e.keyCode == 13) {
      brush.css('background',colorField.val());
    }
});

for (i=0; i<20; i++) {
  $('body').append('<div class="square"></div>');
}

$('body').children('.square').on('click', function(){$(this).css('background',brush.css('background'))})
