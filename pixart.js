// add event listener to set color button
// button auto refreshes page...use preventDefault
// save color from input field to a variable userInput
// change color of brush box to value of userInput variable
// clear text box

var userInput = $("#color-field");
$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
//  console.log("button clicked");
//  console.log(userInput.val());
  $(".brush").css("background", userInput.val());
  userInput.val("");
})
