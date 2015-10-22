var $setColor = $('#set-color');
var $input = $('input');
var $brush = $('.brush').eq(0);
var $body = $('body');
var color = $brush.css('background-color');
var colorSwatchColors = [color];
var colorSwatchDivs = [];
var swatchSize = 3;
// var $swatchContainer = $('.swatch-container');
updateSwatch();
$setColor.on('click', setColor);
// $brush.on('click', function() {
//   color = $brush.css('background-color');
// });
// removed since chrome does by default
// $input.on('keyup', function(evt) {
//   evt.preventDefault();
//   if(evt.keyCode === 13) {
//     setColor(evt);
//   }
// });

function setColor(evt) {
  evt.preventDefault();
    if (color !== $input.val()){
      color = $input.val();
      var oldColor = $brush.css('background-color');
      $brush.css({
        'background-color': color
      });
      var newColor = $brush.css('background-color');
      if (oldColor !== newColor) {
        updateColorSwatchColors();
        updateSwatch();
      }
    }
  $input.val('');
}

function createCanvas(num) {
  for(var i = 0; i < num; i++) {
    var $div = $('<div/>');
    $div.toggleClass('square canvas');
    $div.on('mouseover', function(evt){
      $(this).css({
        'background': color
      });
    });
    $body.append($div);
  }
}

createCanvas(8000);

function updateColorSwatchColors() {
  var isSame = false;

  for (var i = 0; i < colorSwatchColors.length; i++) {
    if (color === colorSwatchColors[i]) {
      console.log('not goin');
      isSame = true;
    }
  }

  if (!isSame) {
    var newLength = colorSwatchColors.push(color);

    if(newLength > swatchSize) {
        colorSwatchColors.shift();
      }
    }
}

function updateSwatch() {
  console.log('runns');
  if (colorSwatchDivs.length < 3){
    newRecentColor();
    console.log('runs2');
  }

  for (var i = 0; i < colorSwatchDivs.length; i++) {
    colorSwatchDivs[i].css({
      'background-color': colorSwatchColors[i]
    });
  }
}

function newRecentColor() {
  var $swatch = $('<div/>');
  $swatch.toggleClass('swatch');
  $swatch.on('click', function(evt) {
    color = $(this).css('background-color');
    $brush.css({
      'background': color
    });
  });
  $brush.after($swatch);
  colorSwatchDivs.push($swatch);
}
