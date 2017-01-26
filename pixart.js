var body = $('body');
var field = $('#color-field');
var button = $('#set-color');
var brush = $('.brush');
// var square = $('.square');

for (var i = 0; i < 20; i++) {
  body.append('<div class="square"></div>');
}

button.click(function(event) {
  event.preventDefault();
  brush.css('background-color', field.val());
});
