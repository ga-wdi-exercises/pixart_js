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