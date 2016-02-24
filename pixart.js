var form = document.querySelector('form');
var brush = document.querySelector('.brush');

form.addEventListener('click', function(e){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
  var color = form.querySelector('#color-field').value;

});

var squareDiv = document.createElement('div');
squareDiv.setAttribute('class', '.square');

for(var i = 0; i<20; i++){
  var squareDiv = document.createElement('div');
  squareDiv.setAttribute('class', '.square');
  document.body.appendChild(squareDiv);
}
function colorSquare() {
  this.style.background = "green";
  this.style.background = color;
}
