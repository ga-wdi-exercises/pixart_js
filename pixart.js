$(document).ready(function() {
  console.log("js file is attached");

// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
  var setColor = $("#set-color"); //set color button

  var colorField = $("#color-field").val(); //input field

  var brushBox = $(".brush") //brush box

  var squareBox = $(".square"); //square box in css

  function handleClickEvent () {
    $("brushBox").css("background-color", "colorField");
    event.preventDefault();

  }

  //enter key being pressed
  $("colorField").keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        $("brushBox").css("background-color", "colorField");
        event.preventDefault();
      }
  });

  function count() {
    for (var i = 8000; i > 0; i -- ) {
    $("body").append("<div class=square></div>");
    }
  }

  $("squareBox").on("mouseover", function() {
    $(this).css("background-color", "colorField");

  });

  $("setColor").on("click", handleClickEvent);
  count();

})
