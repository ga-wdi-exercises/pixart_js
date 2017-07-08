
//define form, input, and div-brush
var form = $('#form')
var input = $('#color-field')
var colorBrush = $('.brush')

//create event, on submission of form, change colorBrush to value of input and preventDefault

form.on('submit', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
})
form.on('enterKey', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
})

//create loop that appends body with div elements and define div

for (let i = 0; i < 20; i++) {
  var square = $('.square')

$('body').append('<div class="square"></div>')
}
