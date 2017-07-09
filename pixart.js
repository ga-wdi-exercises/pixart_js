/* global $ */
console.log('hello world')

var colorField = $('#color-field')
var button = $('#set-color')

var setColor = function () {
  var set = colorField.val()
  $('.brush').css('background', set)
}

// No annoying refresh on enter -- finally
$('#form').on('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    setColor()
  }
})

// SQUARE INVASION!
for (var i = 0; i < 20; i++) {
  var newdiv = $('<div>', {
    'class': 'square'
  })
  $('body').append(newdiv)
}

// GREEN BLOCKS!
$('.square').click(function () {
  var set = colorField.val()
  $(this).css('background', set)
})

button.on('click', setColor)
