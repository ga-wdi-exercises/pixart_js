$(document).ready(function() {
  console.log("js file is attached");

// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
  var setColor = $("#set-color"); //set color button

  var colorField = $("#color-field").val(); //input field

  var brushBox = $(".brush") //brush box

  var input = $("input"); //enter key on keyboard

  var squareBox = $(".square"); //square box in css

  function handleClickEvent () {
    $("brushBox").addClass("colorField");
    event.preventDefault();

  }

  $("colorField").keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        $("brushBox").addClass("colorField");
        event.preventDefault();
      }
  });

  for (var i = 20; i > 0, i -- ) {
    $("body").append("<div> .square </div>")
  }

  $("squareBox").on("click", function() {
    $(this).css("background-color", "#00FF00");
    
  });

  $("setColor").on("click", handleClickEvent);
  // input.on("keydown", handleKeyboardEvent);

})
