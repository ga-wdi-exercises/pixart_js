
var $setColorButton = $('#set-color');
var $body = $('body');
var color = '#1B4370';
$setColorButton.on('click',setColor);
addSquares();

$body.on('mouseover', '.square', paint);

function setColor(e) {
  e.preventDefault();
  var $colorField = $('#color-field');
  color = $colorField.val();
  $('.brush').css('background', color);
  $colorField.val('');
}

function addSquares(){
  var square = "<div class='square'></div>";
  var squares = '';
  // this feels SO sloppy, but I can't think of a better way just yet...
  for (i = 0; i < 8000; i++) {
    squares += square;
  }
  var $squares = $(squares);
  $body.append($squares);
}

function paint(){
  $(this).css('background', color);
}
