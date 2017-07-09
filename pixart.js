function setColor (evt) {
  evt.preventDefault()
  $('.brush').css('background', $('#color-field').val())
}

$('#set-color').on('click', setColor)
$('#set-color').on('onkeypress', function (key) {
  if (key.which === 13) {
    setColor()
  }
})

$('.square').css({height: '10px', width: '10px', margin: '0'})

for (i = 0; i <= 8000; i++) {
  $('body').append('<div class="square"></div>')
}

$('.square').on('mouseover', function () {
  $(this).css('background', $('#color-field').val())
})
