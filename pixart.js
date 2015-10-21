$(document).ready(function(){

  $('#set-color').on('click', function(e){
    e.preventDefault();
    var input = $('#color-field').val();
    $('.brush').css('background', input);
});

  var divSearch = [];

  for (i = 0; i < 20; i++) {
    divSearch.push('<div class="square"></div>');
  }

  $("body").append( divSearch );

  $('.square').on('click', function() {

    $(this).css('background', 'green');

  })





})
