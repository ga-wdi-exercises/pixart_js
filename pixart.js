
var colorButton = document.querySelector("#set-color");
colorButton.addEventListener("click",changeBrush);
// #element.method(event_name,function)

function changeBrush(){
  event.preventDefault();
  var brush =document.querySelector(".brush");
  // brush.style.backgroundColor = "red";
  var colorField = document.querySelector("#color-field");
  brush.style.backgroundColor = colorField.value;
}
