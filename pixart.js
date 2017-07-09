/* global $ */
console.log('online and ready to rock')

// Commit 1
// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener
// HINT: You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default". You can also reference this portion of the Events & Callbacks lesson plan.

// Commit 2
// The same thing should happen when I press the enter key from inside the input field

var button = $('#set-color')
var input = $('#color-field')
var brush = $('.brush')
var form = $('#form')
var square = $('.square')

function setColor (e) {
  e.preventDefault()
  brush.css('background-color', input.val())
}

form.on('submit', setColor)

// Commit 3
// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()

for (var i = 0; i < 20; i++) {
  var sq = $('<div class="square"></div>')
  $('body').append(sq)
// Commit 4
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body element

  sq.on('click', function () {
    $(this).css('background', input.val())
    // Commit 5
    // Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

  })
}



// Commit 6
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!

// Bonus
// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
