/*When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
Use jQuery to select the element, and addEventListener to handle clicks
$("body")[0].addEventListener...*/


$( document ).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault();
    var color = $("#color-field").val();
    $(".brush").css("background-color", color);
  });
  for(i=0; i<20; i++) {
    $("body").append("<div class='square'><div>");
    };
});
