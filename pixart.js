
var button = $('button')
var colorBox = $('.brush')
var input = $('#color-field')
var form = $('.form')
var body = $('body')


var changeColor = function (e) {
  e.preventDefault()
  colorBox.css("background-color", input.val())
}

var createDivs = function () {
  var square = '<div class="square"></div>'
  for (i = 0; i < 20; i++){
  body.append(square)
}
}

button.on('click', changeColor)

form.on('submit', changeColor)

createDivs()
