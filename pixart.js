
var $setColorButton = $('#set-color');
$setColorButton.on('click',setColor);
addSquares();

function setColor(e) {
  e.preventDefault();
  var $colorField = $('#color-field');
  var color = $colorField.val();
  $('.brush').css('background', color);
  $colorField.val('');
}

function addSquares(){
  var square = "<div class='square'></div>";
  var squares = '';
  // this feels SO sloppy, but I can't think of a better way just yet...
  for (i = 0; i < 20; i++) {
    squares += square;
  }
  console.log(squares);
  var $squares = $(squares);
  var $body = $('body');
  $body.append($squares);
}
