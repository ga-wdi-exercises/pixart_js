var setColor = document.getElementById("set-color");
var brushColor = document.getElementsByClassName("brush").value;

setColor.addEventListener("click", function() {
  event.preventDefault()
  $("#brush").css("background", brushColor)

})

getElementByClassName("square").append("body")
