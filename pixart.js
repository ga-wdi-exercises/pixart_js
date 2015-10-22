/* global $ */

var userInput

$(document).ready(function () {
  var inputField = $('input:text')
  console.log(inputField)
  $('#set-color').on('click', function (evt) {
    evt.preventDefault()
    userInput = $('input').val()
    $('.brush').css('background', userInput)
    console.log(userInput)
  })

  // ###Commit 4
  //
  // * Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
  //   * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element

  var amountSquareDivs = 20
  for (var i = 0; i < amountSquareDivs; i++) {
    $('body').append('<div class="square"></div>')
  }

  $('.square').each(function (evt) {
    $(this).on('click', function (evt) {
      console.log($(this))
      $(this).css('background', userInput)
    })
  })
})
