$(document).ready(function() {

  $('#set-color').on('click', function(){
    //prevents page from refreshing
    event.preventDefault();

    var color = $('#color-field').val();
    $('.brush').css('background-color', color);
  })

});
