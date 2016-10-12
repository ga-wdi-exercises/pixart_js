$(document).ready(function(){
  console.log("sup");

  //create button variable for button element
  var setColor = $("button");
  console.log(setColor);

  // grab value in the input field
  var userColor = $("input").val();
  console.log(userColor)

  // variable for .brush div
  var swatch = $(".brush");
  console.log(swatch);


  //function to change color of div
  //on click of button do ____
  setColor.click(function(evt) {
    evt.preventDefault();
    swatch.css("background", userColor); /*does not work :( */
    $("input").val("");
  })

  //same function if enter key is pressed
  $("input").keypress(function(evt){
    if(evt.keyCode == 13) {
      swatch.css("background", userColor);
    };
  })
  // append 20 divs to the body
  for (var i=0; i<21; i++) {
    $("body").append('<div class="square" />');
  };

  //change each square to green on click
  $(".square").on("click", function(){
    $(this).css("background", "green")
  })


});
