var setColor = document.querySelector('#set-color');
var colorField = document.querySelector('#color-field');


setColor.addEventListener('click', function (event){
  event.preventDefault();
  $('.brush').css('background-color', $('#color-field').val());

})
