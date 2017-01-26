$("button").click(changeColor)

function changeColor(){
  event.preventDefault();
  var userInput = document.getElementById("color-field").value;
  $(".brush").css("background", userInput)
}
