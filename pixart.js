function setColor(e) {
  e.preventDefault();
  var inputColor = $('input').val();
  $('.brush').css('background', inputColor);
};

$('button').on('click', setColor)
for (i=0; i <=8000; i++) {
$('body').append($('<div class="square"></div>'))
};

$('.controls ~ *').on('mouseover', function() {
  var brushColor = $('.brush').css('background');
  $(this).css('background', brushColor);
  })
