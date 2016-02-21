console.log('script.js loaded...');
//globals
var pixelForm = document.getElementById('form');
var colorBox = document.querySelector('.brush');
var colorInput = document.getElementById('color-field');
var colorButton = document.getElementById('set-color');

//EVENT HANDLERS
//change brush box color when colorButton is clicked...
colorButton.addEventListener('click', buttonTrigger)
colorInput.addEventListener('keydown', keyTrigger)

function keyTrigger(e) {
  if(event.code == 'Enter') {
    e.preventDefault();
    colorBox.style.backgroundColor = colorInput.value;
    console.log('enter key was pressed. color: ' + colorInput.value);
  }
}

function buttonTrigger(e) {
  e.preventDefault();
  //why doesn't this work as expected on click ...?:
    //var colorInput = document.getElementById('color-field').value;
    //colorBox.style.backgroundColor = colorInput;
  //but this does:
    //var colorInput = document.getElementById('color-field');
    //colorBox.style.backgroundColor = colorInput.value;
  colorBox.style.backgroundColor = colorInput.value;
  console.log('set color button was pressd. color: ' + colorInput.value);
}
