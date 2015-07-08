// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
// Use jQuery to select the element, and addEventListener to handle clicks
// $("body")[0].addEventListener...

$("#set-color").click(function(){
  var colorinput = $("#color-field").val()
  event.preventDefault();
  $(".brush").css("background", colorinput)
})
