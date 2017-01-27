
///creat the variable button, and name it, this is my target//
var colorButton = $('button')
function colorChange(){
  event.preventDefault();
  var colorSelected = document.getElementById('color-field').value;
  $('.brush').css('background',colorSelected)
}

colorButton.on('click',colorChange)

function addDiv(){
  for (var i=0; i<20; i++) {
    var div = document.createElement('div')
    div.className = 'square'
    $('body').append(div);
    $('.square').on('click',onClick)
  }
}
addDiv(20);

function onClick(){
  $(this).css('background','green')
};
