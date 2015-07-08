$(document).ready(function(){

var setColor = document.getElementById("set-color");

form.addEventListener("click", function(event){
  event.preventDefault()
  console.log("I'm working")

})
});

// first try
// //(.brush).css("background-color" : "#"+hex, "color" : "#"+ hex});
//
// second try
// //var change_color = document.getElementById("color-field")
// // $ ("input").keyup(function(){
// //   var value = (this).val();
// //   $ (.brush).text(value)
// // });
// // .keyup();
//
// third try
// // $("#color-field").on("keyup", function(){
// //   console.log($(this).val());
// //   $(.brush).css("background", '#' + $(this).val())
// // });
//
// // $('#activite_color').on('keyup', function() {
// //     console.log($(this).val());
// //     $('.col-lg-1').css('background', '#' + $(this).val());
// // });
//
// Psudocode
// // set color button
// // add jquery event listener
// // should change color of "brush" box to color I specify in the input field
// // control[0] is brush query selector
//       // (.brush).css("background", refer to input here)
//       //     try input.value
//       //     try :input
//       //     try creating a new function
// // find input field
// // include event prevent default ()
// // keyup is "click"
