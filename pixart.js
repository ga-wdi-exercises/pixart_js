// When I clock "set color", it should change the color of the "brush" box to the color I specify in the input field.
var setColor = $('#set-color');
var pixelCount = 8000;
// $('#set-color');
setColor.on("click", function(evt) {
   evt.preventDefault();
   console.log("change color");
   $(".brush").css( "background", $("#color-field").val() );
  });

  // Use jQuery to select the element, and `addEventListener` to handle clicks

// The same thing should happen when I press the enter key from inside the input field
setColor.on("keypress", function(evt) {
   evt.preventDefault();
   console.log("change color");
   $(".brush").css( "background", $("#color-field").val() );
  });

// Create 20 divs of the "square" class and append them to the body
var createCanvas = function(pixelCount) {
  for(var i=0; i<pixelCount; i++){
    $("body").append("<div class = 'square'></div>");
    // $("body").on("click", function(event){
    //   console.log("color change");
    //   $(event).css("background", $(".brush").css("background") );
    //
    // });
  }
};
createCanvas(pixelCount);

$(".square").each(function(index){
  $(this).on("mouseover", function(evt){
    console.log("color-change");
    $(this).css("background", $(".brush").css("background") );
  });
});
