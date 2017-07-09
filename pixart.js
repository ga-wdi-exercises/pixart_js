
// define form, input, and div-brush
var form = $('#form')
var input = $('#color-field')
var colorBrush = $('.brush')
let color1 = $('.color1')
let colorPal = []
// create event, on submission of form, change colorBrush to value of input and preventDefault

form.on('submit', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
  /*if (colorPal.length < 2) {

  palette()
}*/
})
form.on('enterKey', function (event) {
  event.preventDefault()
  colorBrush.css('background-color', input.val())
})

// create loop that appends body with div elements and define div (takes time to load?)

for (let i = 0; i < 8000; i++) {
  var square = $('.square')
  $('body').append('<div class="square"></div>')
}
// changes background color of square div on mouseover
square.on('mouseover', function (event) {
  $(this).css('background-color', input.val())
})
/*function palette () {
  $('.controls').append('<div class="color1"></div>')
  $('.color1').css('background-color', input.val())
  $(this).colorPal.push()

}*/
