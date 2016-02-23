var form = document.getElementById('form');
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');

form.addEventListener('click', function(e){
  e.preventDefault();
  brush.style.backgroundColor = input.value;
});
