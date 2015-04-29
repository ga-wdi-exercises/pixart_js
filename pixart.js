var body = document.querySelector('body');
var colorEntry = document.getElementById('color-field');
var colorButton = document.getElementById('set-color');
var brushBox = document.querySelector('.brush');

for (var i = 0; i < 3; i++) {
  var swatch = document.createElement('div');
  swatch.id = 'swatch' + (i+1);
  document.querySelector('.swatches').appendChild(swatch);
};

function shiftSwatches(newColor){
  var lastBrush = brushBox.style.backgroundColor;
  var color3 = swatch3.style.backgroundColor;
  var color2 = swatch2.style.backgroundColor;
  console.log(lastBrush + ' ' + color3 + ' ' + color2);
  swatch1.style.backgroundColor = color2;
  swatch2.style.backgroundColor = color3;
  swatch3.style.backgroundColor = lastBrush;
  brushBox.style.backgroundColor = newColor;
}

colorButton.addEventListener('click', function(action){
  action.preventDefault();
  var newColor = colorEntry.value;
  shiftSwatches(newColor);
})

colorEntry.addEventListener('keydown', function(action){
  if(action.keyCode === 13){
    var newColor = colorEntry.value;
    shiftSwatches(newColor);
  }
})



for (var i = 1; i <= 8000; i++) {
  var paintedPixel = document.createElement('div');
  paintedPixel.className = 'square';
  body.appendChild(paintedPixel);
  paintedPixel.addEventListener('mouseover', function(action){
    var brushColor = window.getComputedStyle(brushBox)["background-color"];
    this.style.background = brushColor;
  })
};
