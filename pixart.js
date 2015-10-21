$(document).ready(function(){

  $('#set-color').on('click', function(e){
    e.preventDefault();
    var input = $('#color-field').val();
    $('.brush').css('background', input);
});







})
