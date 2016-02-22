var brushBox = document.getElementsByClassName("brush")[0];
var colorField = document.getElementById("color-field");
var colorBtn = document.getElementById("set-color");

colorField.addEventListener("keypress", checkKey);
colorBtn.addEventListener("click",changeColor);

function checkKey(event){
  if(event.keyCode == 13){
    changeColor(event);
  }
}

function changeColor(event){
  event.preventDefault();
  brushBox.style = "background-color: " + colorField.value; +";";
  colorField.value = "";
}
