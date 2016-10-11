
$("#set-color").on("click", function(){
    event.preventDefault();
    var x = $('#color-field').select().val();
      $('.brush').css('background-color', x);
  });


  $("#set-color").on("keypress", "return", function(){
      event.preventDefault();
      var x = $('#color-field').select().val();
        $('.brush').css('background-color', x);
    });

for (i=0; i<20; i++) {
$("body").append("<div class = 'square'></div>");
}
