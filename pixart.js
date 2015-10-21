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

function createCanvas(num) {
  for(var i = 0; i < num; i++) {
    var $div = $('<div></div>');
    // $body.append(div);
    // $div = $('div:last-of-type');
    // console.log($div);
    $div.toggleClass('square');
    $div.on('click', function(evt){
      console.log(evt);
      var $targetDiv = $(evt.target);
      $targetDiv.css({
        'background': 'green'
      });
    });
    $body.append($div);
  }
}

createCanvas(20);
