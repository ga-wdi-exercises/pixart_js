$("#set-color").click(function(event) {
  event.preventDefault()
  $("#third").css('background', $("#second").css('background'))
  $("#second").css('background', $("#first").css('background'))
  $("#first").css('background', $(".brush").css('background'))
  $(".brush").css('background', $('#color-field').val())
  $("#color-field").val('')
})
for (i=0; i<8000; i++) {
$('body').append('<div class="square"></div>')
}
$('.square').on('mouseover', function(){
  $(this).css('background', $('.brush').css('background'))
})
$(".hx").click(function(){
  $(".brush").css('background', $(this).css('background'))
})
