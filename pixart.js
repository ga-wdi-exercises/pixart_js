/* global $ */
$(document).ready(function () {

var button = $('#set-color')
var form = $('#form')

function setColor () {
  color = $('#color-field').val()
  $('.brush').css('background', color)
}

button.on('click', setColor)

function changeFormDefault (evnt) {
  evnt.preventDefault()
}
function enterPressed (e) {
  if (e.which === 13) {
      setColor()
  }
}

form.on('submit', changeFormDefault)
form.on('submit', enterPressed)

function createDivs () {
  $('<div></div>').attr(
    {'class': 'square', id: 'circle'}
  ).appendTo('body')
  }

for (var i = 0; i < 20; i++) {
  createDivs()
}

var square = $('.square')
square.on('click', function() {
  $(this).css('background', color)
})

})
