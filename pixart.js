var typedColor = document.querySelector("#color-field");
var previewBox = document.querySelector(".brush");
var form = document.querySelector("#set-color");

function boxColor(){
  if (typedColor.value === null || typedColor.value === ""){
      alert("Please type a color into the form field.");
      return false;
  }else{
  previewBox.style.backgroundColor = typedColor.value;
  event.preventDefault();
  }
}

function addBoxes(){
  var newBox;
  for(var b = 0; b <= 20; b++){
    newBox = $("<div class ='brush'/>");
    $("body").append(newBox);
  }
}

form.addEventListener("click",boxColor);

addBoxes();
