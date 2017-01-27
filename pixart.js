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






})
