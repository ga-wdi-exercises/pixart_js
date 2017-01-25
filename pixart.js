$( document ).ready(function() {
  $('button').on('click', function() {
    var color = $('input').val();
    $('.brush').css('background-color', color);

  });
  $(document).on('keydown', function() {
    if (event.which === 13) {
      event.preventDefault();
      var color = $('input').val();
      $('.brush').css('background-color', color);
    }
    else {
    }
  });
});

$(document).ready(function() {
  for (i=0;i<20;i++) {
    console.log("firing");
    var div = $("<div></div>");
    div.addClass('square');
    $('body').append(div);
  }
})
