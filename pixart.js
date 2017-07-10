/* global $ */

var $input = $('#color-field')

$('#form').on('click', function (evnt) {
  evnt.preventDefault()
  var color = $input.val()
  $('.brush').css('background', color)
})

for (let i = 0; i < 20; i++) {
  $('body').append("<div class='square'></div>")
}

$('.square').on('click', function (evnt) {
  $(evnt.target).css('background', 'green')
})
