var $setColor = $('#set-color');
var input = $('input');
var $color;
var $brush = $('.brush');

$setColor.on('click', function(evt) {
  evt.preventDefault();
  color = input.val();
  console.log(color);
  $brush.css({
    'background': color
  });
});
