//Example code - modify
$("#set-color").on("click", function(){
  event.preventDefault();
  var x = $('#color-field').select().val();
    $('.brush').css('background-color', x);
}).preventDefault();

$('#usersSearch').keypress(function(e){
  event.preventDefault();
  var x = $('#color-field').select().val();
    $('.brush').css('background-color', x);
}).preventDefault();
