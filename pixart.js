var setColor = document.getElementById("set-color");
var brushColor = document.getElementsByClassName("brush").value;

setColor.addEventListener("click", function() {
  event.preventDefault()
  $("body").css("background", brushColor)
})
