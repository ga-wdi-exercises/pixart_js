$("#set-color").click(function(event) {
  event.preventDefault()
  $(".brush").css('background', $('#color-field').val())
  console.log($(".brush").css('background'))
})
for (i=0; i<20; i++) {
$('body').append('<div class="square"></div>')
}
