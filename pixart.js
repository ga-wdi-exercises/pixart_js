/* global $ */

var button = $('#set-color')
var form = $('#form')
var color
var colorSwatch = []
var recentOne = $('#recent-one')
var recentTwo = $('#recent-two')
var recentThree = $('#recent-three')
var recentColor = $('.recent')

function setColor () {
  color = $('#color-field').val()
  $('.brush').css('background', color)
  if (colorSwatch.length < 3) {
    colorSwatch.unshift(color)
  } else if (colorSwatch.length === 3) {
    colorSwatch.unshift(color)
    colorSwatch.pop()
  }
  recentOne.css('background', colorSwatch[0])
  recentTwo.css('background', colorSwatch[1])
  recentThree.css('background', colorSwatch[2])
}

function swatchPicker () {
  color = $(this).css('background-color')
  $('.brush').css('background', color)
}

function changeFormDefault (evnt) {
  evnt.preventDefault()
}
function enterPressed (e) {
  if (e.which === 13) {
    setColor()
  }
}

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

form.on('submit', changeFormDefault)
form.on('submit', enterPressed)
button.on('click', setColor)
recentColor.on('click', swatchPicker)
