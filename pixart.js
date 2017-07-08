/* global $ */
$(document).ready(function () {

var button = $('#set-color')
var form = $('#form')

function setColor () {
  color = $('#color-field').val()
  $('.brush').css('background', color)
}
button.on('click', setColor)

function changeFormDefault (e) {
  e.preventDefault()
}
form.on('submit', changeFormDefault)

})
