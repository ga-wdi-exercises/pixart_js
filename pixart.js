$(document).ready(function() {

  var color;

  $('#set-color').on('click', function(){
    //prevents page from refreshing
    event.preventDefault();
    color = $('#color-field').val();
    $('.brush').css('background-color', color);
  })

  $('#color-field').on('keypress', function(e){
    var key = e.which;
    color = $(this).val();
    if (key === 13) {
      $('.brush').css('background-color', color);
    }
  })

});
