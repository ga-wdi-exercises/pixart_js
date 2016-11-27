$(function(){
  let $colorField = $("#color-field");
  let $setColor = $("#set-color");
  let $brushes = $('.brush');
  let $firstBrush = $brushes.first();
  let $secondBrush = $firstBrush.next();
  let $thirdBrush = $secondBrush.next();
  let brushColor = $colorField.val();

  $setColor.on('click', function(event) {
    event.preventDefault();
    $thirdBrush.css('background-color', $secondBrush.css('background-color'));
    $secondBrush.css('background-color', $firstBrush.css('background-color'));
    $firstBrush.css('background-color', $colorField.val());
    $brushes.removeClass('selected');
    $firstBrush.addClass('selected');
    brushColor = $colorField.val();
  });

  $('.brush').on('click', function(event) {
    $brushes.removeClass('selected');
    $(this).addClass('selected');
    brushColor = $(this).css('background-color');
  });

  for(let i = 0; i < 8000; i++) {
    $('body').append($('<div>', {class: 'square'}));
  }
  $('.square').on('mouseover', function(event) {
    $(this).css('background-color', brushColor);
  });

});
