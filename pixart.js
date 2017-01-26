// changing color of brush box to color inputted commit 1 & 2
var colorButton = $('button')


colorButton.on('click',function(){
  event.preventDefault();
  var colorSelected = document.getElementById('color-field').value;
  $('.brush').css('background',colorSelected)
})

// commit 3- 20 divs of square class and append them to the body
function addDiv(){
  for (var i=0; i<20; i++) {
    var div = document.createElement('div')
    div.className = 'square'
    $('body').append(div);
  }
}
addDiv(20);
