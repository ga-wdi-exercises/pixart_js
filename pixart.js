$(document).ready(function(){

  $('#set-color').on('click', function(e){
    e.preventDefault();
    var input = $('#color-field').val();
    $('.brush').css('background', input);
});

  var divSearch = [];

  for (i = 0; i < 8000; i++) {
    divSearch.push('<div class="square"></div>');
  }

  $("body").append( divSearch );

  $('.square').on('mouseover', function() {
    var input = $('#color-field').val();

    $(this).css('background', input);

  })





})
