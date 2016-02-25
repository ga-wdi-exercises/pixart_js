// define a variable that holds the text to be inputed
// var form = document.getElementsByID('form');
// // define a variable that is the input
// var input = document.getElementsByID('color-field');
// // define a variable for the brush class
// var brush = document.getElementsByClassName('brush');
//
// // I need an event listener that will listen while a user clicks inside of it and displays what they input
// $( "form" ).submit(function( event ) {
//   alert("This is calling the form handler for .submit().")
//   event.preventDefault();
// });

var btn = $('#set-color');
var inputColor;
var clrDiv = $('.brush');

btn.click(function(){
  inputColor = $('#color-field').val();
 clrDiv.css('background-color', inputColor);

});
