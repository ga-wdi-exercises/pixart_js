$('#set-color').on('click', function(evt) {
  evt.preventDefault();
  $('.brush').css('background', $('.input').val());
})

$('#set-color').on('keypress', function(evt) {
  evt.preventDefault();
  $('.brush').css('background', $('.input').val());
})

for(var i = 0; i < 8000; i++){
  $("body").append($("<div class='square'><div/>"))
}

$('.square').on('mouseover', function(evt) {
  evt.preventDefault();
  $('.square').css('background', $('.input').val());
})
