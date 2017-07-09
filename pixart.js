function setColor(evt) {
  evt.preventDefault()
  $('.brush').css('background', $('color-field').val())
}

$('set-color').on('click', setColor)
$('set-color').on('onkeypress', function (key){
    if (key.which === 13) {
      setColor()
    }
  })

for (i = 0; i <= 20; i++) {
  $('body').append('<div class="square"></div>')
}

$('.square').on('click', function () {
  $('this').css('background', $('color-field').val())
})
