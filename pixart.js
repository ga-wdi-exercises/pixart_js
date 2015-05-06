var form = document.getElementById('form');

form.addEventListener('submit',function(event){
  event.preventDefault();
  document.querySelector('.brush').style.backgroundColor = document.querySelector('#color-field').value;
});

for (var i = 0; i < 8000; i++){
  var div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseover', function(){
    this.style.backgroundColor = document.querySelector('.brush').style.backgroundColor;
  });
  document.body.appendChild(div);
}
