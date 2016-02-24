var form = document.getElementById('form');
var color;

form.addEventListener('submit', function(event){
color = form.querySelector('#color-field').value

  document.querySelector('.brush').style.background = color;
  event.preventDefault();
});


for(var i = 0; i < 8000; i++){
  var squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  squareDiv.addEventListener('mouseover', colorSqure);
  document.body.appendChild(squareDiv);
}
function colorSqure(){
  this.style.background = color;
}
