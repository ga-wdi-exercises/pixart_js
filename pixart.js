$(document).ready(function() {
  console.log("js file is attached");

// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
  var setColor = $("#set-color"); //set color button

  var colorField = $("#color-field").val(); //input field

  var brushBox = $(".brush") //brush box

  function handleClickEvent () {
    $("brushBox").addClass("colorField");
    event.preventDefault();

  }

  $("setColor").on("click", handleClickEvent);

})
