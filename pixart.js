var body = document.querySelector('body');
var colorEntry = document.getElementById('color-field');
var colorButton = document.getElementById('set-color');
var brushBox = document.querySelector('.brush');

console.log(brushBox);

colorButton.addEventListener('click', function(action){
  action.preventDefault();
  brushBox.style.background = colorEntry.value;
})

colorEntry.addEventListener('keydown', function(action){
  if(action.keyCode === 13){
    action.preventDefault();
    brushBox.style.background = colorEntry.value;
  }
})

for (var i = 1; i <= 8000; i++) {
  var paintedPixel = document.createElement('div');
  paintedPixel.className = 'square';
  body.appendChild(paintedPixel);
  paintedPixel.addEventListener('mouseover', function(action){
    var brushColor = window.getComputedStyle(brushBox).getPropertyValue("background-color");
    this.style.background = brushColor;
  })
};
