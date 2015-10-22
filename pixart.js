$(document).ready(createCanvas)

var colorName = $('#color-field');
var colorSet = $('#set-color');
var brushBox = $('.brush');

colorSet.on("click", function(evt) {
  evt.preventDefault();
  brushBox.css("background", colorName.val());
});

function createCanvas () {
  for (var i = 0; i < 20; i++) {
    var canvasBlock = document.createElement('div');
    canvasBlock.className = "square";
    $('body').append(canvasBlock);
  }
}
 
