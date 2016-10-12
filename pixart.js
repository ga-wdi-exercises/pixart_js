$(document).ready(function() {
  console.log("js file is attached");

  var setColor = $("#set-color"); //set color button
  var colorField = $("#color-field"); //input field
  var brushBox = $(".brush"); //brush box


  //function for changing color of brush box
  function handleClickEvent() {
    brushBox.css("background", colorField.val());
    event.preventDefault();
  }

  //function that executes for loop for drawing area
  //loop works both ways
  for (var i = 8000; 0 < i; i--) {
    $("body").append("<div class=square></div>");
  }

  //square variable has to be declared inside of function to work
  var squareBox = $(".square");

  //click on square and it fills with color
  squareBox.on("mouseover", function() {
    $(this).css("background", colorField.val());
  });

  //button for start function
  setColor.on("click", handleClickEvent);

});
