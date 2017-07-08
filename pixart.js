
//define form, input, and div-brush
var form = $('#form')
var input = $('#color-field')
var colorBrush = $('.brush')

//create event, on submission of form, change colorBrush to value of input and preventDefault

form.on('submit', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
})
