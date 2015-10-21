$(document).ready(function(){
  $('#set-color').on('click', function(e){
    e.preventDefault();
    $('.brush').css('background-color', $('#color-field').val())
  })
})

$(document).ready(function(){
    for (i = 0; i < 20; i++){
      $('body').append("<div></div>")
    }
  })
