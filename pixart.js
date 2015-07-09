//When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)

$("#set-color").on("click", function() {
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush")[0].style.background=color;
})
