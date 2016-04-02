$("#form").submit(getInput);

function getInput() {
  event.preventDefault();
  var userInput = $("#color-field").val();
  var colorBox = $(".brush").eq(0);
  $(colorBox).css("background-color", userInput);
}
