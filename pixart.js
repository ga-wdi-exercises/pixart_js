var field = $('#color-field');
var brush = $('.brush');
var dab = $('.dab');

$('#set-color').click(function(event) {
  event.preventDefault();
  dab.eq(2).css('background-color', dab.eq(1).css('background-color'));
  dab.eq(1).css('background-color', dab.eq(0).css('background-color'));
  dab.eq(0).css('background-color', brush.css('background-color'));
  brush.css('background-color', field.val());
  field.val('');
});

dab.click(function() {
  brush.css('background-color', $(this).css('background-color'));
});

for (var i = 0; i < 8000; i++) {
  $('body').append('<div class="square"></div>');
}

$('.square').mouseover(function() {
  $(this).css('background-color', brush.css('background-color'));
});
