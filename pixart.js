function setColor(e) {
  e.preventDefault();
  var inputColor = $('input').val();
  $('.brush').css('background', inputColor);
};

$('button').on('click', setColor)
for (i=0; i <=20; i++) {
$('body').append($('<div class="square"></div>'))
};

$('.controls ~ *').on('click',function() {
  $(this).css('background', 'green');
  })
