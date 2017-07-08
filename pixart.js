/* global $ */

var button = $('#set-color')
var form = $('#form')
var color
var colorSwatch = []

function setColor () {
  color = $('#color-field').val()
  $('.brush').css('background', color)
  if (colorSwatch.length < 3) {
    colorSwatch.unshift(color)
  } else if (colorSwatch.length === 3) {
    colorSwatch.unshift(color)
    colorSwatch.pop()
  }
}

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
button.on('click', setColor)

function createDivs () {
  $('<div></div>').attr('class', 'square').appendTo('body')
  }

for (var i = 0; i < 8000; i++) {
  createDivs()
}

var square = $('.square')
square.on('mouseover', function () {
  $(this).css('background', color)
})
