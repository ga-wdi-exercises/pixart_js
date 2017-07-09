var brush = $('.brush')
var button = $('#set-color')
var input = $('#color-field')
var body = $('body')


var setColor = function (e) {
  e.preventDefault()
  brush.css('background-color', input.val())
}

button.on('click', setColor)

for (i = 0; i < 20; i++) {
var square = $('<div class ="square"></div>')
    body.append(square)
    square.on('click', function () {
      $(this).css('background', input.val())
    })

  }




// * Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
//   * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element
// $("#yourID").click(function(){
//
//   $(this).css("background-color","yellow");
//
//   });
