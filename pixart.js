$(document).ready(function(){

var setColor = document.getElementById("set-color");

form.addEventListener("click", function(event){
  event.preventDefault()
  console.log("I'm working")

})
});

// (.brush).css("background-color" : "#"+hex, "color" : "#"+ hex});

// var change_color = document.getElementById("color-field")
// $ ("input").keyup(function(){
//   var value = (this).val();
//   $ (.brush).text(value)
// });
// .keyup();

// $("#color-field").on("keyup", function(){
//   console.log($(this).val());
//   $(.brush).css("background", '#' + $(this).val())
// });

// $('#activite_color').on('keyup', function() {
//     console.log($(this).val());
//     $('.col-lg-1').css('background', '#' + $(this).val());
// });

// set color button
// add jquery event listener
// should change color of "brush" box to color I specify in the input field
// control[0] is brush query selector
      // (.brush).css("background", refer to input here)
      //     try input.value
      //     try :input
      //     try creating a new function
// find input field
// include event prevent default ()
// keyup is "click"

I could not complete the first commit correctly. I did create a form variable and a form addEventListener correctly.

My thought process was to change the brush box color by manipulating the input tag. I looked online for a few options such as .on(keyup) which seems to be similar to the pixart.js solution on github. I could not get it to work.

I looked at setting up another changeColor function for that step because I have seen fellow students solution but I could not get it to work.

I really like the step by step directions because at least I'm not in the dark as to what to do next.

I know I want to change the color within my form.addEventListener but do not understand how to do that. I have included my psudocode and different ideas I've tried in the comments.
