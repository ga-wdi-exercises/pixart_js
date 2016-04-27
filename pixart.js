var form = document.getElementById('form');
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');
var canvas = document.getElementById('canvas');

form.addEventListener('submit', function(event){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
});

for( var i = 0; i < 4440; i++){
  var div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseover', function(){
    this.style.backgroundColor = brush.style.backgroundColor;
  });
  canvas.appendChild(div);
}
