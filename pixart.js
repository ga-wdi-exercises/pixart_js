
var colorButton = document.querySelector("#set-color");
colorButton.addEventListener("click",changeBrush);

function changeBrush(){
  event.preventDefault();
  var brush =document.querySelector(".brush");
  brush.style.backgroundColor = "red";
}
