$(document).ready(function () {
  var inputField = $('input:text')
  console.log(inputField)
  $('#set-color').on('click', function (evt) {
    evt.preventDefault()
    var userInput = $('input').val()
    $('.brush').css('background', userInput)
    console.log(userInput)
  })

  // * Create 20 divs of the "square" class and append them to the body
  //   * **Hint**: use `.append()`
  var amountSquareDivs = 20
  for (var i = 0; i < amountSquareDivs; i++) {
    $('body').append('<div class="square"></div>')
  }
})
