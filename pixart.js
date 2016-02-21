console.log('script.js loaded...');
//globals
var pixelForm = document.getElementById('form');
var colorBox = document.querySelector('.brush');
var colorInput = document.getElementById('color-field');
var colorButton = document.getElementById('set-color');

//EVENT HANDLERS
//change brush box color when colorButton is clicked...
colorButton.addEventListener('click', changeColor)

function changeColor(e) {
  e.preventDefault();
  //why doesn't this work on click:
    //var colorInput = document.getElementById('color-field').value;
    //colorBox.style.backgroundColor = colorInput;
  //but this does:
    //var colorInput = document.getElementById('color-field');
    //colorBox.style.backgroundColor = colorInput.value;
  colorBox.style.backgroundColor = colorInput.value;
  console.log(colorInput.value);
}
