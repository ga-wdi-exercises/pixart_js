
var button = $('button')
var colorBox = $('.brush')
var input = $('#color-field')
var form = $('.form')
var body = $('body')

var changeColor = function (e) {
  e.preventDefault()
  colorBox.css('background-color', input.val())
}


for (i = 0; i < 20; i++) {
    var square = $('<div class="square"></div>')
    body.append(square)
    square.on('mouseover', function (){
      $(this).css('background', input.val())
    })}

button.on('click', changeColor)
form.on('submit', changeColor)
