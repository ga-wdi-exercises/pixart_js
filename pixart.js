var colorButton = $('#set-color');
var brushBox = $('.brush');
var colorInput = $('#color-field');


colorButton.on('click', function(event) {
  event.preventDefault();
});

colorButton.on('click', changeColor);

function changeColor() {
  brushBox.css('background', colorInput.val());
}

for (var i = 8000; i > 0; i--) {
  var div = $('<div class=square> </div>');
  div.on('mouseover', changeBoxColor);
  $('body').append(div);
}

function changeBoxColor() {
  $(this).css('background', colorInput.val());
}
