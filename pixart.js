/* global $ */

var inputBox = $('#color-field')
var setColorButton = $('#set-color')
var brushBox = $('.brush')

setColorButton.on('click', function (e) {
  e.preventDefault()
  brushBox.css('background', inputBox.val())
})

inputBox.on('onkeypress', function (e) {
  if (e.which === 13) {
    brushBox.css('background', inputBox.val())
  }
})

// Create 20 divs of the "square" class and append them to the body
//  * **Hint**: use `.append()`
for (var i = 0; i < 20; i++) {
  $('body').append('<div class="square"></div>')
}
