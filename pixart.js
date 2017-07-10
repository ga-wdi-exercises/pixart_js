/* global $ */

var $input = $('#color-field')
var swatches = []
var $brush = $('.brush')
var color

$('#form').on('submit', function (evnt) {
  evnt.preventDefault()
  color = $input.val()
  $brush.css('background', color)
  swatches.unshift(color)
  $('#swatch1').css('background', swatches[1])
  $('#swatch2').css('background', swatches[2])
  $('#swatch3').css('background', swatches[3])
  if (swatches.length > 4) {
    swatches.pop()
  }
})

$('#swatch1').on('click', function (chng) {
  chng.preventDefault()
  color = swatches[1]
  $brush.css('background', color)
})

$('#swatch2').on('click', function (chng) {
  chng.preventDefault()
  color = swatches[2]
  $brush.css('background', color)
})

$('#swatch3').on('click', function (chng) {
  chng.preventDefault()
  color = swatches[3]
  $brush.css('background', color)
})

for (let i = 0; i < 8000; i++) {
  $('body').append("<div class='square'></div>")
}

$('.square').on('mouseover', function (evnt) {
  $(evnt.target).css('background', color)
})
