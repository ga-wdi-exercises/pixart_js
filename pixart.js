$(document).ready(function(){

var buttonClicked = $("#set-color");

function changeColor(evt){
  var colorSelected=$("#color-field").val();
  evt.preventDefault();
  $("div .brush").css("background-color",colorSelected);
  console.log("color changed to "+ colorSelected);
  $("body").on("click",squareCreated);
}

buttonClicked.on("click",changeColor);

$("#color-field").on("keypress",enterKeyPressed);
function enterKeyPressed(e){
  if (e==13)
  {
    changeColor();
  }
}

function squareCreated(){
  console.log("box created");
var  boxes= []
for(i=0;i<20;i++) {
    boxes.push("<div id="#squarebox"class="square"> </div>");
  }
$("body").append(boxes);
}

squarebox=$("#squarebox")
function squareboxcolorchanged(){
  $("#squarebox").css("background-color",colorSelected)
}
squarebox.on(click,squareboxcolorchanged)
})
