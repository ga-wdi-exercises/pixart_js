
var newColor;
//add event handler to set color button
$('#set-color').on("click", setColor)

//Set color function will take the inner HTML from input field as an argument
function setColor() {
  event.preventDefault();
  //get value from input field
  newColor = document.getElementById("color-field").value;
  console.log(newColor)
  $(".brush").css("background-color", newColor)
}
