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

  var amountSquareDivs = 8000
  for (var i = 0; i < amountSquareDivs; i++) {
    $('body').append('<div class="square"></div>')
  }

  $('.square').each(function (evt) {
    $(this).on('mouseover', function (evt) {
      console.log($(this))
      $(this).css('background', userInput)
    })
  })
})
