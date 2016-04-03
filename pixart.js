$(document).ready(function(){

  $('#form').on("submit", function(event){
    event.preventDefault();
    $('.brush').css('background-color', $('#color-field').val());
  })

  for(var i = 0; i < 8000; i++) {
    var square = $('<div/>').addClass('square').on('mouseover', function(){
      $(this).css('background-color', $('#color-field').val())
    });
    $('body').append(square);
  }
})
