/* global $ */

var inputBox = $('#color-field')
var setColorButton = $('#set-color')
var brushBox = $('.brush')

setColorButton.on('click', function (e) {
  e.preventDefault()
  brushBox.css('background', inputBox.val())
})

inputBox.on('onkeypress', function (e) {
  if(e.which === 13) {
    brushBox.css('background', inputBox.val())
  }
})
