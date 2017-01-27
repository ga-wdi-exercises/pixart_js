
///creat the variable button, and name it, this is my target//
//commit 1&2//
var colorButton = $('button')
function colorChange(){
  event.preventDefault();
  var colorSelected = document.getElementById('color-field').value;
  $('.brush').css('background',colorSelected)
}

colorButton.on('click',colorChange)
//commit 3//
function addDiv(){
  for (var i=0; i<20; i++) {
    var div = document.createElement('div')
    div.className = 'square'
    $('body').append(div);
    $('.square').on('click',onClick)
  }
}
addDiv(20);
//commit 4/5//
function onClick(){
  var colorSelected = document.getElementById('color-field').value;
  $(this).css('background', colorSelected)
};
