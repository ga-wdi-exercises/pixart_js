for(var i=0;i<20; i++){
  elemDiv= document.createElement('div');
  elemDiv.className = "square";
 document.body.appendChild(elemDiv);
}

document.getElementById("set-color").addEventListener("click", changeBoxColor);
document.getElementById("set-color").addEventListener("onkeypress", changeBoxColor);

var square =document.querySelectorAll(".square")
for(var i=0; i<square.length; i++){
  square[i].addEventListener("click", changeDivColor);
}


function changeBoxColor(event){

  event.preventDefault();
  // event.target // equals the button that was clicked
  // so we don't have to document.getElementById("set-color") again
  var input = document.getElementById("color-field").value;
  var brush = document.querySelector(".brush");
  brush.style.background = input
}



function changeDivColor(event){
  var brush = document.querySelector(".brush");
  if (brush.style.background === ""){
    var brushColor = window.getComputedStyle(document.querySelector(".brush"))["background-color"];
    event.target.style.background = brushColor;
  }else{
    var brushColor = brush.style.background;
    event.target.style.background = brushColor;
  }
}
