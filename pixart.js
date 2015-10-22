//initialize color so that by default the brush will be blue
var color = "#1C4273";

// on click of "set color" or by pressing enter, swatch will change to the color specified in the input box (by programming it on click, it also works on hitting enter - not sure if that's a smart browser feature or what, but there was no need to program it using keyCode)
$("button")[0].addEventListener("click", function(event) {
  event.preventDefault();
  color = $("[type]").val();
  $("div.brush").css("background", color);
});

// create the canvas and enable the use of the paint brush on mouseover
for (i = 0; i < 8000; i++) {
  $(document.createElement("div")).attr("class", "square").appendTo('body').mouseover( function () {
    $(this).css("background", color);
  });
}

//this is for commit 2, but it was actually already working before writing this code, based on the above. I tried to write it anyway for practice but can't get it to work..
// $("#set-color").on( "keyup", function(event) {
//   if ( event.keyCode == 13 ) {
//      event.preventDefault();
//      color = $("[type]").val();
//      $("div.brush").css("background", color);
//    }
// });
