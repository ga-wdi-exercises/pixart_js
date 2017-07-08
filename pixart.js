/* global $ */

var brushes = []
brushOne = $('.one')
brushTwo = $('.two')
brushThree = $('.three')
brushes.push(brushOne, brushTwo, brushThree)

// Set brush color by clicking button
$('#set-color').on('click', function (n) {
  n.preventDefault()
  colorChange()
})

// Set brush color by pressing 'Enter'
$('#color-field').keypress(function (n) {
  if (n.which === 13) {
    n.preventDefault()
    colorChange()
  }
})

// Change color of brush
function colorChange () {
  var color = $('#color-field').val()
  var colorBox1 = brushes[0].css('background')
  var colorBox2 = brushes[1].css('background')
  brushes[2].css('background', colorBox2)
  brushes[1].css('background', colorBox1)
  brushes[0].css('background', color)
}

$('.brush').on('click', function () {
  var color = $(this).css('background')
  var colorBox1 = brushes[0].css('background')
  var colorBox2 = brushes[1].css('background')
  brushes[2].css('background', colorBox2)
  brushes[1].css('background', colorBox1)
  brushes[0].css('background', color)
})

// Create drawing board
for (let i = 0; i < 8000; i++) {
  $('body').append('<div class="square"></div>')
}

// Create squares when mouse moves over drawing board
$('.square').on('mouseover', function () {
  var getColor = $('.brush').css('background')
  $(this).css('background', getColor)
})
