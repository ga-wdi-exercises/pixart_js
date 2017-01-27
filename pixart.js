$(document).ready(function(){

var getColor = function(){
  var color = $('input').val();
  return color;
}

$('button').on('click', function(event){
  $('.brush').css('background', getColor());
  event.preventDefault()
});

$('input').on('pressEnter', function(){
  $('.brush').css('background', getColor());
});

function createSquares(){
  for(var i = 0; i < 8000; i++){
  $('body').append( $("<div class='square'></div>") );
  }
}
createSquares()

$('.square').on('mouseover', function(){
  $(this).css('background', getColor());
});


})
