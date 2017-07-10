var marker = $('.markerh')
var button = $('#set-color')
var input = $('#color-field')
var body = $('body')
// brush.css('background-color', '#1B4370')
// $('brush').css('background-color', 'blue');

var setColor = function (e) {
  e.preventDefault()
  marker.css('background-color', input.val())
}

button.on('click', setColor)

for (i = 0; i < 8000; i++) {
var square = $('<div class ="square"></div>')
    body.append(square)
    square.on('mouseover', function () {
      $(this).css('background', brush.css('background-color'))
    })

  }
