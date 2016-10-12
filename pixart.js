$(document).ready(function() {
  console.log("js file is attached");

  var setColor = $("#set-color"); //set color button
  var colorField = $("#color-field"); //input field
  var brushBox = $(".brush"); //brush box
  var squareBox = $(".square");

  //function for changing color of brush box
  function handleClickEvent() {
    event.preventDefault();
    brushBox.css("background", colorField.val());
    console.log(colorField.val());
  }

  // enter key being pressed
  colorField.keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    event.preventDefault();
    brushBox.css("background-color", colorField.val());
    }
  });

  //function that executes for loop for drawing area
  function count() {
    for (var i = 0; i < 8000; i++) {
    $("body").append("<div class=square></div>");
    }
  }

  //click on square and it fills with color--not working
  squareBox.on("mouseover", function() {
    $(this).css("background", colorField.val());
  });

  setColor.on("click", handleClickEvent); //button
  count(); //runs loop for drawing area

});
