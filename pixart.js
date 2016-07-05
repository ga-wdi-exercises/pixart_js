$(document).ready(function(){
  $('button').on('click', function() {
    var color = $('input').val();
    $('.brush').css({'background': color});
    event.preventDefault();
  });
  $('button').keypress(function() {
    var color = $('input').val();
    $('.brush').css({'background': color});
    event.preventDefault();
  });
});




