$ (function(){
  $('#color-field').keyup(function(event){
    if(event.keyCode === 13){
      $('#color-field').click();
    }
  })
  $('button').click(function(e) {
    e.preventDefault();
  });
  $('button').on('click', function(){
    console.log('button works');

    var color = $('#color-field').val();
    $('.brush').css('background-color', color);
  });
});
