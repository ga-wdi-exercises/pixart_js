$(document).ready(function () {
  console.log('hello world')
})
 //When I click the "Set Color" button, it should change the color of
 //the "brush" box to the color I specify in the input field

var button = $("button");

//var input = $('#color-field').attr('input')
  function clickEvent(event) {
    $(".brush").css("background", $('input').val());// change to use input value
    event.preventDefault();
  }
button.on("click", clickEvent);

var square = [];
for(i = 0; i < 20; i++) {
  square.push('<div class="square"></div>')
}
$('body').append(square)
//Add functionality so that when I click on each "square", it changes the color of that individual
//square to "green". Hint: either add the event listener while creating the squares, or listen
//for events on the body element

$('.square').on('click', function(){
  $(this).css('background', 'green')
})
