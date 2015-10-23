//initialize color so that by default the brush is same as canvas
var color = "#E7E5DB";                   // blue: "#1C4273";

var counter = 0;

// on click of "set color" button, change swatch in order and start over width
// first swatch after cycle through each one. Visible name of swatch should match
// background color 
$("button").eq(0).click(function () {
        event.preventDefault();
        color = $("[type]").val();
        $("div.brush").eq(counter).css("background", color);
        $("p:first-child").eq(counter).html(color);
        counter = (counter + 1) % $(".brush").length; // increments the counter
        // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array (found this on stack overflow)
        $("[type]").val(" ");
    });

// create the canvas and enable the use of the paint brush on mouseover
for (i = 0; i < 8000; i++) {
  $(document.createElement("div")).attr("class", "square").appendTo('body').mouseover( function () {
    $(this).css("background", color);
  });
}

// clear canvas on button click
$(".clear").on("click", function(event) {
  console.log("it's working!");
  $(".square").css("background", "#E7E5DB")
});

// change brush to swatch color on click
$(".brush").on("click", function(event) {
  color = event.target.style.background;
  $(".square").mouseover( function () {
    $(this).css("background", color);
  });
});


//this is for commit 2, but it was actually already working before writing this
//code, based on the above. I tried to write it anyway for practice but can't
//get it to work..
// $("#set-color").on( "keyup", function(event) {
//   if ( event.keyCode == 13 ) {
//      event.preventDefault();
//      color = $("[type]").val();
//      $("div.brush").css("background", color);
//    }
// });
