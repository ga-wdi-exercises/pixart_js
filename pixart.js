var form = document.getElementById('form');

form.addEventListener('submit', function(event){
  var color =  form.querySelector('#color-field').value;
  document.querySelector('.brush').style.background = color;
  event.preventDefault();
});
