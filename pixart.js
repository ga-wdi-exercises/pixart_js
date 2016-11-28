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
  for (var i=1; i<=20; i++) {
    $('body').append('<div class="square">');
  }
  $(".square").on("click", function(){
        var color = $('#color-field').val();
 +			$(this).css("background-color", color);
 +			console.log("squares are clicked");
});
});
