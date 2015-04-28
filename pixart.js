function changeBoxColor(event){

  event.preventDefault();
  // event.target // equals the button that was clicked
  // so we don't have to document.getElementById("set-color") again
  var input = document.getElementById("color-field").value;
  var brush = document.querySelector(".brush");
  brush.style.background = input
  }

document.getElementById("set-color").addEventListener("click", changeBoxColor);
document.getElementById("set-color").addEventListener("onkeypress", changeBoxColor);
