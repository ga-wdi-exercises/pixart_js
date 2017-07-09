var brush = $('.brush')
var button = $('#set-color')
var input = $('#color-field')
var body = $('body')

var setColor = function (e) {
  e.preventDefault()
  brush.css('background-color', input.val())
}

button.on('click', setColor)

  var makeDiv = function () {
    var square = '<div class ="square"></div>'
    for (i = 0; i < 20; i++) {
      body.append(square)

    }
  }
makeDiv()
