
// define form, input, and div-brush
var form = $('#form')
var input = $('#color-field')
var colorBrush = $('.brush')

// create event, on submission of form, change colorBrush to value of input and preventDefault

form.on('submit', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
})
form.on('enterKey', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
})

// create loop that appends body with div elements and define div

for (let i = 0; i <8000; i++) {
  var square = $('.square')
  $('body').append('<div class="square"></div>')
}
// changes background color of square div on click
square.on('mouseover', function (event) {
  $(this).css('background-color', input.val())
})
