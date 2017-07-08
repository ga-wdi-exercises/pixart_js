/* global $ */

var inputBox = $('#color-field')
var setColorButton = $('#set-color')
var brushBox = $('.brush')

setColorButton.on('click', function (e) {
  e.preventDefault()
  brushBox.css('background', inputBox.val())
})
