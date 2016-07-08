//getting html elements
var brush = $(".brush");
var button = $("button");

function changeColor(e){
  e.preventDefault();
  var color = $("#color-field");
  //brush.style.backgroundColor = color.value;
  brush.css("background", color.val());
}
button.on("click", changeColor);
//event(action, event handler slash function to call)
//this also works when I press enter from the input field

//append 20 divs
for (i = 0; i <= 20; i++){
  $("body").append($("<div class='square'/>"));
}

// change box color
function squareColor(){
  $(this).css("background", brush.css("background") );
  console.log( $(this) );
}
$(".square").on("click", squareColor);

// modify squares
function changeSize(){
  $(".square").css("height", "10 px")
}
