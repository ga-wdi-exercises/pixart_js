$(document).ready(function() {

// Select #set-color and store in a variable for "Set Color" button
var setColorButton = $("#set-color")

// Select .brush and store in a variable for "Brush Box" that we want to change it's color after clicking "Set Color" button.
var brushBox = $(".brush")

// Set event listener ("click") and create an anonymous function for "Set Color" button.
setColorButton.on("click", function() {
event.preventDefault();

// Inside the function select #color-field element and store in a variable for getting "color input".
var colorInput = $("#color-field")

// ask input.val // Make .brush's(brush box) background value to colorInput that we defined as user's "color input".
 $(".brush").css("background", colorInput.val());
console.log("The brush box color has been changed to " + colorInput.val());
});


});
