$(document).ready( function(){
//commit 1
  //when user clicks on "set color" button:
    //change the color of the "brush" box to the color specified in the input field
  $("#set-color").on("click", function(){
    event.preventDefault();
    //get value of input
    colorVal = $("#color-field").val();
    //brush box: set background
    $( ".brush").css( "background-color", colorVal);
  })
//commit 2
  //when user hits enter key: same as above
  $("#set-color").keyup(function(e){
    if (e.keyCode == 13){
      $( ".brush").css( "background-color", colorVal);
    }
  })
})
