var setColor = document.querySelector('#set-color');
var colorField = document.querySelector('#color-field');


setColor.addEventListener('click', function (event){
  event.preventDefault();
  $('.brush').css('background-color', $('#color-field').val());

})

// colorField.addEventListener('submit', function (event){
//   event.preventDefault();
//   $('.brush').css('background-color', $('#color-field').val());
//
// })

var boxObject = $('.square')

for (i = 0; i < 20; i++) {
  $('body').append("<div class='square'></div>");
}
