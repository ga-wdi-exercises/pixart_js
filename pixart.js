$(function(){
  let $colorField = $("#color-field");
  let $setColor = $("#set-color");
  let $controlsBrush = $(".controls > .brush");

  $setColor.on('click', function(event) {
    event.preventDefault();
    $controlsBrush.css('background-color', $colorField.val());
  });

  for(let i = 0; i < 8000; i++) {
    $('body').append($('<div>', {class: 'square'}));
  }
  $('.square').on('mouseover', function(event) {
    $(this).css('background-color', $colorField.val());
  });

});
