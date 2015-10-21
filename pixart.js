var $setColor = $('#set-color');
var $input = $('input');
var $brush = $('.brush');
var $body = $('body');
var color = $brush.css('background');

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

function createCanvas(num) {
  for(var i = 0; i < num; i++) {
    var $div = $('<div></div>');
    $div.toggleClass('square');
    $div.on('mouseover', function(evt){
      console.log(evt);
      var $targetDiv = $(evt.target);
      $targetDiv.css({
        'background': color
      });
    });
    $body.append($div);
  }
}

createCanvas(8000);
