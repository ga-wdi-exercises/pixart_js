function setColor(e) {
  e.preventDefault();
  var inputColor = $('input').val();
  $('.brush').css('background', inputColor);
};

$('button').on('click', setColor)
