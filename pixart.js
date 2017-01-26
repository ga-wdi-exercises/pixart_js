// changing color of brush box to
var colorButton = $('button')


colorButton.on('click',function(){
  event.preventDefault();
  var colorSelected = document.getElementById('color-field').value;
  $('.brush').css('background',colorSelected)
})
