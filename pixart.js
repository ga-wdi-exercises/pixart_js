var $setColor = $('#set-color');
var $input = $('input');
var $brush = $('.brush');
var $body = $('body');
var color = $brush.css('background-color');
var colorSwatchColors = [];
var colorSwatchDivs = [];
var swatchSize = 3;

$setColor.on('click', setColor);
// $input.on('keyup', function(evt) {
//   evt.preventDefault();
//   if(evt.keyCode === 13) {
//     setColor(evt);
//   }
// });

function setColor(evt) {
  evt.preventDefault();
  updateColorSwatchColors();
  color = $input.val();
  $brush.css({
    'background': color
  });
  updateSwatch();
}

function createCanvas(num) {
  for(var i = 0; i < num; i++) {
    var $div = $('<div/>');
    $div.toggleClass('square');
    $div.on('mouseover', function(evt){
      var $targetDiv = $(evt.target);
      $targetDiv.css({
        'background': color
      });
    });
    $body.append($div);
  }
}

createCanvas(8000);

function updateColorSwatchColors() {
  if (!colorSwatchColors) {
    createSwatch();
  }
  var newLength = colorSwatchColors.push(color);

  if(newLength > swatchSize) {
    colorSwatchColors.shift();
  }
}

function updateSwatch() {
  if (colorSwatchDivs.length < 3){
    newRecentColor();
  }

  for (var i = 0; i < colorSwatchColors.length; i++) {
    colorSwatchDivs[i].css({
      'background-color': colorSwatchColors[i]
    });
  }
}

function newRecentColor() {
  var $swatch = $('<div/>');
  $swatch.toggleClass('brush');
  $swatch.on('click', function(evt) {
    var $targetDiv = $(evt.target);
    color = $targetDiv.css('background-color');
  });
  $brush.after($swatch);
  colorSwatchDivs.push($swatch);
}
// function createSwatch() {
//   for (var i = 0; i < swatchSize; i++) {
//       // if (colorSwatchColors[i]){
//       var $swatch = $('<div/>');
//       $swatch.css({
//         'background': colorSwatchColors[i]
//       });
//       $swatch.toggleClass('brush');
//       $swatch.on('click', function(evt) {
//         var $targetDiv = $(evt.target);
//         color = $targetDiv.css('background-color');
//       });
//       $brush.after($swatch);
//       colorSwatchDivs.push($swatch);
//     // }
//   }
// }

// createSwatch();
