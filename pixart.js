$(document).ready(function(){
  $("button").on("click", function(evt){
    evt.preventDefault();
    var colorSelected = $("input:text").val(); //This is correct.
    console.log("the button works...");
    console.log("User input is: " + colorSelected);
    $(".brush").css("background-color", colorSelected);
  })
});
