/* global $ */

$('#set-color').on('click', function (n) {
  n.preventDefault()
  var color = $('#color-field').val()
  $('.brush').css('background', color)
})
