// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
// Use jQuery to select the element, and addEventListener to handle clicks
// $("body")[0].addEventListener...

$("#set-color").click(function(){
  var colorinput = $("#color-field").val()
  event.preventDefault();
  $(".brush").css("background", colorinput)
})

// The same thing should happen when I press the enter key from inside the input field


$("#color-field").keyup(function(e){
  if(e.which === 13){
  var colorinput = $("#color-field").val()
  event.preventDefault();
  $(".brush").css("background", colorinput)
}})

// Create 20 divs of the "square" class and append them to the body

// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body element

$(function()
  {for (var i = 1; i <= 20; i++)
{  $("body").append("<div class = 'square'></div>");
    $(".square").last().click(function(){
      $(this).css("background", "green")})}})


// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.



// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!
