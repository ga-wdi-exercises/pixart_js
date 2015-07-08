//commit 1
  //use event.preventDefault
  //when use clickes on "set color" button:
    //change the color of the "brush" box to the color specified in the input field
    //get value of input
    //brush box: set background
$(document).ready( function(){
  $("#set-color").on("click", function(){//(event)?
    event.preventDefault();
    var colorVal = $("#color-field").val();
    $( ".brush").css( "background-color", colorVal);
  })
})
