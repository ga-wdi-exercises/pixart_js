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
//commit 3 & 4 & 5 & 6
  //create 20 divs with class "square" and append to body
  //when user clicks on 'square' it changes color to green
  //when user clicks on 'square' it changes color to input if defined
  //change divs to 8000, change 'click' to 'mouseover'
  var $newDiv;
  for (var i=0; i<8000; i++) {
    $newDiv = $("<div class='square' />").on("mouseover", function(){
      if (typeof colorVal != 'undefined'){
        $(this).css("background-color", colorVal);
      }
    })
    $("body").append($newDiv);
  }
})
