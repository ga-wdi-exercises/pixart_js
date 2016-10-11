
$("#set-color").on("click", function(){
    event.preventDefault();
    var x = $('#color-field').select().val();
      $('.brush').css('background-color', x);
  });
