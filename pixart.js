/* global $ */

var inputBox = $('#color-field')
var setColorButton = $('#set-color')
var brushBox = $('.brush')

/* button listener */
setColorButton.on('click', function (e) {
  e.preventDefault()
  brushBox.css('background', inputBox.val())
  addToSwatch(inputBox.val())
})

/* Key Enter listener */
inputBox.on('onkeypress', function (e) {
  if (e.which === 13) {
    brushBox.css('background', inputBox.val())
    addToSwatch(inputBox.val())
  }
})

/* Build squares */
for (var i = 0; i < 8000; i++) {
  var $newDiv = $('<div class="square"></div>')
  $newDiv.attr('id', 'square' + i)
  $('body').append($newDiv)
}

/* Square listener */
$('.square').on('mouseover', function () {
  $(this).css('background', inputBox.val())
})

/* Bonus Material: Color Swatches */

var colorSwatch = []

function addToSwatch (color) {
  // only add to swatch if it isn't already
  // in history
  if (colorSwatch.indexOf(color) < 0) {
    // the length can only be up to 3
    if (colorSwatch.length < 3) {
      colorSwatch.push(color)

      rebuildSwatch()
    } else {
      colorSwatch.shift()

      colorSwatch.push(color)

      rebuildSwatch()
    }
  }
}

function rebuildSwatch () {
  $('.swatch').remove()

  for (var i = 0; i < colorSwatch.length; i++) {
    var $newSwatch = $('<div class="square swatch"></div>')

    $newSwatch.css('background', colorSwatch[i])

    $('form').after($newSwatch)
  }

/* Swatch listener */
  $('.swatch').on('click', function () {
    inputBox.val($(this).css('background'))

    brushBox.css('background', $(this).css('background'))
  })
}
