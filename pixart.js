/* global $ */
console.log('online and ready to rock')

// Variables
var input = $('#color-field')
var brush = $('.brush')
var form = $('#form')

// Function to set color of brush and swatch to the input value
function setColor (e) {
  e.preventDefault()
  brush.css('background-color', input.val())
  addSwatch(input.val())
}

// Listener that sets the color when a user hits enter or clicks
form.on('submit', setColor)

// Loop to create 8000 divs with class "square"
for (var i = 0; i < 8000; i++) {
  var sq = $('<div class="square"></div>')
  $('body').append(sq)

/* Each time the div is created, also add an
 event listener to change to the background color on mouseover */
  sq.on('mouseover', function () {
    $(this).css('background-color', input.val())
  })
}
// Bonus - create a swatch of 3 most recently used colors

// Create an array to store my swatch colors
var colorList = []

// Create a flexbox div for all my swatches to live in neatly
form.after($('<div class = swatches></div>'))

// Function to add to the Swatch
function addSwatch (color) {
  // only add the color if it's not already in the list
  if (colorList.indexOf(color) < 0) {
    // do not have more than 3 swatches
    if (colorList.length < 3) {
      // add the new color to the end of my list
      colorList.push(color)
      // make the actual swatch square
      makeSwatch()
    } else {
      // remove the first color from the list
      colorList.shift()
      // add the new color to the end of the list
      colorList.push(color)
      // make the actual swatch square
      makeSwatch()
    }
  }
}

// Function to make the actual swatch sqaure and add it to my swatches div
function makeSwatch () {
  // remove any swatch that exists already
  $('.swatch').remove()
  // make the swatches for each color in our list
  for (var i = 0; i < colorList.length; i++) {
    var $swatch = $(`<div class="swatch"></div>`)
    // set the background color of the swatch to the color in our list
    $swatch.css('background-color', colorList[i])
    // add the swatch to my swatches div
    $('.swatches').append($swatch)
  }


// Listener so that if a swatch is clicked, the brush becomes that color
$('.swatch').on('click', function () {
  input.val($(this).css('background-color'))
  brush.css('background-color', $(this).css('background-color'))
})
}
