var input;
$(document).ready(function(){
  $('#set-color').on("click", function (evt){
      input = $('#color-field').val();
      $('.brush').css('background', input);
      evt.preventDefault();
  });

});
