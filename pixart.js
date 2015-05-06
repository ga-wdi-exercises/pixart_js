var form = document.getElementById('form');

form.addEventListener('submit',function(event){
  event.preventDefault();
  document.querySelector('.brush').style.backgroundColor = document.querySelector('#color-field').value;
});
