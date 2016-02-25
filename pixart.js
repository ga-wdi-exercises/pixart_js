document.getElementById('form').addEventListener('submit',function(event){
  console.log(event)
document.getElementsByClassName('brush').style.backgroundColor = document.getElementById('color-field').val;
event.preventDefault();
})
