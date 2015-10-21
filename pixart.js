var input;
$(document).ready(function(){

//Function that changes color
  var setColor = function(){
    input = $('#color-field').val();
    $('.brush').css('background', input);
  };

//Event Handler for Enter Key
  $('#set-color').on("click", function(evt){
    evt.preventDefault();
    setColor();
  });

//Event Handler for Click
  $('#color-field').keypress(function(evt){
    if(evt.keyCode == 13){
      setColor();
    }
  });

});
