
var button = $('button')
var colorBox = $('.brush')
var input = $('#color-field')

var changeColor = function (e) {
  e.preventDefault()
  colorBox.css("background-color", input.val())
}

button.on('click', changeColor)
