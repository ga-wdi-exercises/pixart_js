$(document).ready(function(){

  $('button').on('click', function(evt){
    evt.preventDefault();
    var color = $('input').val()
    $('.brush').css('background', color);
  })
})
