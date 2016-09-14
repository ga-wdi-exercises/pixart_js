
var $setColorButton = $('#set-color');
$setColorButton.on('click',setColor);

function setColor(e) {
  e.preventDefault();
  var $colorField = $('#color-field');
  var color = $colorField.val();
  $('.brush').css('background', color);
  $colorField.val('');
}
