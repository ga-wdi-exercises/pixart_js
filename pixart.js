$("button").click(changeColor)

for (var i = 0; i < 20; i++) {
  var square = $("<div></div>");
  square.addClass("square")
  $("body").append(square)
}

function changeColor(){
  event.preventDefault();
  var userInput = document.getElementById("color-field").value;
  $(".brush").css("background", userInput)
}
