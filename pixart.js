/* global $ */
console.log('hello world')

var colorField = $('#color-field')
var button = $('#set-color')

var setColor = function () {
  var set = colorField.val()
  $('.brush').css('background', set)
}

$('#form').on('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    setColor()
  }
})

button.on('click', setColor)
