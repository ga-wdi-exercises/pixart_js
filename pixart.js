var $setColor = $('#set-color');
var $input = $('input');
var color;
var $brush = $('.brush');
var $body = $('body');

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

var div = document.createElement('div');

function createCanvas(num) {
  for(var i = 0; i < num; i++) {
    var div = document.createElement('div');
    $body.append(div);
  }
}

createCanvas(20);
