$("document").ready(function(){

var brushBox = $(".brush");
var inputBox= $("#color-field");
var setColorButton = $("#set-color");
var inputForm = $("#form");
var colorName = "#1B4370";

function setColor() {
  inputForm.on("submit", function(e){
  e.preventDefault();
  });
  console.log("button clicked")

//get value of input box
  var colorName = (inputBox.val())
  console.log(colorName)

//set value to change color of brushbox
//brushBox.css("background", "colorName");
  brushBox.css("background", inputBox.val())

// $("#color-field").val(function())
}

setColorButton.on("click", setColor)
setColorButton.keypress(function(e){
  if(e.which==13){
    event.preventDefault();
  }
    setColor;
  })

});
