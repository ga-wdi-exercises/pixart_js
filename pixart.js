// below is the standard code for the document ready event.
$(document).ready(function(){
   // jQuery goes here...
  //  $("#inputThing").val("Hi!");
  //  var inputText = $("input").val();
  //  console.log(inputText);


  $("#set-color").click( function(){
    event.preventDefault();
    var colorIn = $("input").val();
    $(".brush").css("backgroundColor", colorIn);
  });

});
