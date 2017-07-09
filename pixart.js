$(document).ready(function () {
  console.log('hello world')
})
 //When I click the "Set Color" button, it should
 //change the color of the "brush" box to the color
 //I specify in the input field

var button = $("button");
//var input = $('#color-field').attr('input')
  function clickEvent(event) {
    $(".brush").css("background", $('input').val());// change to use input value
    event.preventDefault();
  }

button.on("click", clickEvent);

//Create 20 divs of the "square" class and append
//them to the body. Hint: use .append()
var square = []
for(i = 0; i < 20; i++) {
  square.push('<div class="square"></div>');
}
$('body').append(square.join(''))
