var body = document.querySelector('body');
var colorEntry = document.getElementById('color-field');
var colorButton = document.getElementById('set-color');
var brushBox = document.querySelector('.brush');

for (var i = 0; i < 3; i++) {
  var swatch = document.createElement('div');
  swatch.id = 'swatch' + (i+1);
  document.querySelector('.swatches').appendChild(swatch);
};

var swatchArray = [
  window.getComputedStyle(brushBox)['background-color'],
  window.getComputedStyle(swatch3)['background-color'],
  window.getComputedStyle(swatch2)['background-color']
];

function resetSwatchArray(){
  swatchArray = [
    window.getComputedStyle(brushBox)['background-color'],
    window.getComputedStyle(swatch3)['background-color'],
    window.getComputedStyle(swatch2)['background-color']
  ];
};

function shiftSwatches(newColor){
  brushBox.style.backgroundColor = newColor;
  swatch3.style.backgroundColor = swatchArray[0];
  swatch2.style.backgroundColor = swatchArray[1];
  swatch1.style.backgroundColor = swatchArray[2];
  resetSwatchArray();
};

colorButton.addEventListener('click', function(action){
  action.preventDefault();
  var newColor = colorEntry.value;
  shiftSwatches(newColor);
});


swatch1.addEventListener('click', function(){
    var swatchColor = window.getComputedStyle(this)['background-color'];
    var currentBrush = window.getComputedStyle(brushBox)['background-color'];
    brushBox.style.backgroundColor = swatchColor;
    this.style.backgroundColor = currentBrush;
    resetSwatchArray();
});

swatch2.addEventListener('click', function(){
    var swatchColor = window.getComputedStyle(this)['background-color'];
    var currentBrush = window.getComputedStyle(brushBox)['background-color'];
    brushBox.style.backgroundColor = swatchColor;
    this.style.backgroundColor = currentBrush;
    resetSwatchArray();
});

swatch3.addEventListener('click', function(){
    var swatchColor = window.getComputedStyle(this)['background-color'];
    var currentBrush = window.getComputedStyle(brushBox)['background-color'];
    brushBox.style.backgroundColor = swatchColor;
    this.style.backgroundColor = currentBrush;
    resetSwatchArray();
});

for (var i = 1; i <= 8000; i++) {
  var paintedPixel = document.createElement('div');
  paintedPixel.className = 'square';
  body.appendChild(paintedPixel);
  paintedPixel.addEventListener('mouseover', function(action){
    var brushColor = window.getComputedStyle(brushBox)["background-color"];
    this.style.background = brushColor;
  });
};
