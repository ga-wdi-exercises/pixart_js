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
