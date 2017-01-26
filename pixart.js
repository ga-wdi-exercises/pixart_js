var button = $('#set-color')
var brush = $('.brush')
var colorField = $('#color-field')

button.on('click',function(){
  brush.css('background',colorField.val());
  return false;
})
