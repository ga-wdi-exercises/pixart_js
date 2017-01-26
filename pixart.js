// changing color of brush box to color inputted commit 1 & 2
var colorButton = $('button')
function colorChange(){
  event.preventDefault();
  var colorSelected = document.getElementById('color-field').value;
  $('.brush').css('background',colorSelected)
}

colorButton.on('click',colorChange)

// commit 3- 20 divs of square class and append them to the body
function addDiv(){
  for (var i=0; i<20; i++) {
    var div = document.createElement('div')
    div.className = 'square'
    $('body').append(div);
    //add function to click to change square.
    $('.square').on('click',onClick)
  }
}
addDiv(20);

//commit 4 - change for each square
function onClick(){
  var colorSelected = document.getElementById('color-field').value;
  $(this).css('background',colorSelected)
};
