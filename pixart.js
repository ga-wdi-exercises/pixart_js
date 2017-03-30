var setColor = $('#set-color');
var brush = $('.brush');
var colorSelector = $('#color-field');


setColor.on('click', function(event) {
  event.preventDefault();
});

setColor.on('click', changeColor);

function changeColor() {
  brush.css('background', colorSelector.val());
}

for (var i = 9000; i > 0; i--) {
  var div = $('<div class=square> </div>');
  div.on('mouseover', boxColor);
  $('body').append(div);
}

function boxColor() {
  $(this).css('background', colorSelector.val());
}
