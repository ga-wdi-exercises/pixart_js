//get content of input field with id colorfield
//set the squares color to match the content of the input field
$('document').ready(function(){
  var color;
  for (i = 0; i < 8000; i++) {
    $('body').append('<div class="square"></div>');
  }
  $('.square').on("mouseover",function(event){
    $(this).css('background', color);
    event.preventDefault();
  });
  $( "#submit_button").click(function(event){
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
