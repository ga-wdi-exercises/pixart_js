var button = $('#set-color')
var brush = $('.brush')
var colorField = $('#color-field')

button.on('click',function(){
  brush.css('background',colorField.val());
  return false;
})
colorField.on('keypress', function(){
    if (e.keyCode == 13) {
      brush.css('background',colorField.val());
    }
});
for (i=0; i<20; i++) {
  $('body').append('<div class="square"></div>');
}
