//get content of input field with id colorfield
//set the squares color to match the content of the input field
$('document').ready(function(){
  for (i = 0; i < 20; i++) {
    $('body').append('<div class="square"></div>');
  }
  $( "#submit_button").click(function(event){
    var color;
    color = $('#color-field').val();
    $('#brush').css('background', color);
    event.preventDefault();
    });
  $("#color-field").keypress (function(e){
    if(e.which == 13){
      $('#submit_button').click();
    }
  });
});
