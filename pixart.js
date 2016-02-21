console.log('script.js loaded...');
//globals
var pixelForm = document.getElementById('form');
var colorBox = document.querySelector('.brush');
var colorInput = document.getElementById('color-field');
var colorButton = document.getElementById('set-color');

//create 20 div's with class .square and append them to document.body
for (var i = 2; i < 8000; i++) {
  var extraDiv = document.createElement('div');
  extraDiv.className = 'square'
  document.body.appendChild(extraDiv);
  extraDiv.addEventListener('click', function() {
    this.style.backgroundColor = colorInput.value;
  })
}


//EVENT HANDLERS
//change brush box color when colorButton is clicked...
colorButton.addEventListener('click', buttonTrigger)
colorInput.addEventListener('keydown', keyTrigger)


//event handler functions
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
