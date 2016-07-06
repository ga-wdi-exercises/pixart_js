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
