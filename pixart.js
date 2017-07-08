/* global $ */

$('#set-color').on('click', function (n) {
  n.preventDefault()
  var color = $('#color-field').val()
  $('.brush').css('background', color)
})

$('#color-field').keypress(function (n) {
  if (n.which === 13) {
    var color = $('#color-field').val()
    $('.brush').css('background', color)
  }
})
