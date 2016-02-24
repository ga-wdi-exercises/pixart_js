var form = document.getElementById('form');

form.addEventListener('submit', function(event){
  var color = form.querySelector('#color-field').value;
  document.querySelector('.brush').style.background = color;
  event.preventDefault();
});

var squareDiv = document.createElement('div');
squareDiv.setAttribute('class', '.squre');

for(var i = 0; i < 20; i++){
  var squareDiv = document.createElement('div');
  squareDiv.setAttribute('class', '.square');
  document.body.appendChild(squareDiv);
}
