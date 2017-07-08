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

for (let i = 0; i < 20; i++) {
  $('body').append('<div class="square"></div>')
}

$('.square').on('click', function () {
  var getColor = $('.brush').css('background')
  $(this).css('background', getColor)
})
