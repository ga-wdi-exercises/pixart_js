var input;
$(document).ready(function(){

//Function that changes color of any given element
  var setColor = function(target, index){
    input = $('#color-field').val();
    $(target).eq(index).css('background', input);
  };

//Event Handler for Enter Key
  $('#set-color').on("click", function(evt){
    evt.preventDefault();
    setColor('.brush',0);
  });

//Event Handler for Click
  $('#color-field').keypress(function(evt){
    if(evt.keyCode == 13){
      setColor('.brush',0);
    }
  });

//Create small squares
  for(var i=0; i<8000; i++){
    $('body').append('<div class="square"></div>');
  }
//Add event handler to small squares
  $('.square').each(function(index){

      $(this).hover(function(){
          setColor('.square',index);
      });

  })

});
