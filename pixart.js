
var newColor;
//add event handler to set color button
$('#set-color').on("click", setColor)
$('#set-color').keypress(function(e){
  if(e.which === 13){
    setColor();
  }
})

//Set color function will take the inner HTML from input field as an argument
function setColor() {
  event.preventDefault();
  //get value from input field
  newColor = document.getElementById("color-field").value;
  $(".brush").css("background-color", newColor)
}

//Create 20 divs of the "square" class and append them to the body
for(var i = 0; i < 8000; i++){
  $("body").append("<div class='square'></div>");
  }

$(".square").on("mouseover", function(event){
  $(event.target).css("background-color", newColor)
})
