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
