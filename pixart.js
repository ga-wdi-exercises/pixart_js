$(document).ready(function () {
  var inputField = $('input:text')
  console.log(inputField)
  $('#set-color').on('click', function (evt) {
    evt.preventDefault()
    var userInput = $('input').val()
    $('.brush').css('background', userInput)
    console.log(userInput)
  })
})
