var $setColor = $('#set-color');
var $input = $('input');
var color;
var $brush = $('.brush');

$setColor.on('click', setColor);
$input.on('keyup', function(evt) {
  if(evt.keyCode === 13) {
    setColor(evt);
  }
});

function setColor(evt) {
  evt.preventDefault();
  color = $input.val();
  $brush.css({
    'background': color
  });
}
