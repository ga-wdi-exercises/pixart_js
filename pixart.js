$("#set-color").click(function(event) {
  event.preventDefault()
  $(".brush").css('background', $('#color-field').val())
  // console.log($(".brush").css('background'))
})
for (i=0; i<8000; i++) {
$('body').append('<div class="square"></div>')
}
$('.square').on('mouseover', function(){
  $(this).css('background', $('#color-field').val())
  // console.log($(this).css('background'))
})
