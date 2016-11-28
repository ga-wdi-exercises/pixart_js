$ (function(){

  $('button').click(function(e) {
    e.preventDefault();
  });

  $('button').on('click', function(){
    console.log('button works');

    var color = $('#color-field').val();
    $('.brush').css('background-color', color);
  });
});
