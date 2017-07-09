var brush = $('.brush')
var button = $('#set-color')
var input = $('#color-field')

var setColor = function (e) {
  e.preventDefault()
  brush.css('background-color', input.val())
}

button.on('click', setColor)
