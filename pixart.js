// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// use jQuery to select the element, and `addEventListener` to handle clicks
$("button")[0].addEventListener("click", function(event) {
  event.preventDefault();
  color = $("[type]").val();
  $("div.brush").css("background", color);
});
