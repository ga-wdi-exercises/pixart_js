var field = $('#color-field');
var button = $('#set-color');
var brush = $('.brush');

button.click(function(event) {
  event.preventDefault();
  brush.css('background-color', field.val());
});
