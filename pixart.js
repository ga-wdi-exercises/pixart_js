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

// $(document).ready(function() {
//   var div = $("<div></div>");
//   $("#box").append(div);
// })
