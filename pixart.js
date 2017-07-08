var setColor = $('#set-color')
var brush = $('.brush')
var input = $('#color-field')
var divSquare = $('<div class="square"></div>')

function changeBrushColor (evt) {
   evt.preventDefault()
   brush.css('background', input.val())
}

function addDiv () {
    for (var i = 0; i < 20; i++) {
    $('body').append(divSquare.clone())
  }
}

function changeSquare () {
  $(this).css('background', input.val())
}

setColor.on('click', changeBrushColor)
setColor.on('keypress', changeBrushColor)
addDiv()
$('.square').on('click', changeSquare)
