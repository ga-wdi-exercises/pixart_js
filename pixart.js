var brush = $('.brush')
var button = $('#set-color')
var input = $('#color-field')
var body = $('body')
// brush.css('background-color', '#1B4370')
// $('brush').css('background-color', 'blue');

var setColor = function (e) {
  e.preventDefault()
  brush.css('background-color', input.val())
}

button.on('click', setColor)

for (i = 0; i < 8000; i++) {
var square = $('<div class ="square"></div>')
    body.append(square)
    square.on('mouseover', function () {
      $(this).css('background', brush.css('background-color'))
    })

  }




// * Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
//   * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element
// $("#yourID").click(function(){
//
//   $(this).css("background-color","yellow");
//
//   });
