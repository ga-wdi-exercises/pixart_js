/* global $ */

var $input = $('#color-field')

$('#form').on('click', function (evnt) {
  evnt.preventDefault()
  var color = $input.val()
  $('.brush').css('background', color)
})

for (let i = 0; i < 8000; i++) {
  $('body').append("<div class='square'></div>")
}

$('.square').on('mouseover', function (evnt) {
  $(evnt.target).css('background', $input.val())
})
