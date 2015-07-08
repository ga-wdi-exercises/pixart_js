var setColor = document.getElementById("set-color");
var brushColor = document.getElementsByClassName("brush").value;

setColor.addEventListener("click", function() {
  event.preventDefault()
  $("#brush").css("background", brushColor)

})

getElementByClassName("square").append("body")

function turnGreen(square) {
  document.getElementByClassName("square").append("body")
  $("#square").css("background-color", brushColor)
}
