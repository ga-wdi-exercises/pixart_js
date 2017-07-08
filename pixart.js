var setColor = $('#set-color')
var brush = $('.brush')
var input = $('#color-field')

setColor.on('click', function (evt) {
   evt.preventDefault()
   brush.css('background', input.val())
})
