$(document).ready(function(){
  console.log("sup");

  //create button variable for button element
  var setColor = $("button");
  console.log(setColor);

  // grab value in the input field
  var userColor;

  // variable for .brush div
  var swatch = $(".brush");
  console.log(swatch);


  //function to change color of div
  //on click of button do ____
  setColor.click(function(evt) {
    evt.preventDefault();
    userColor = $("input").val();
    if (userColor !==""){
     swatch.css("background-color", userColor);
    $("input").val("")
  };
  })

  //same function if enter key is pressed
  $("input").keypress(function(evt){
    if(evt.keyCode == 13) {
      swatch.css("background", userColor);
    };
  })
  // append 20 divs to the body
  for (var i=0; i<8001; i++) {
    $("body").append('<div class="square" />');
  };

  //change each square to green on click
  $(".square").on("mouseover", function(){
    $(this).css("background", userColor) //this works if argument2 = "green"
  })

  $(".square").on("click", function(){
    $(this).css("background", "red") //this works if argument2 = "green"
  })


});
