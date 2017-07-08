var setColor = $('#set-color')
var brush = $('.brush')
var input = $('#color-field')

function changeBrushColor(evt) {
   evt.preventDefault()
   brush.css('background', input.val())
}

setColor.on('click', changeBrushColor)
setColor.on('keypress', changeBrushColor)
