$(document).ready(function() {
  var colorSwatch = []; //instantiate dummy array accessible to all functions

  //set brush color helper function
  function setBrushColor() {
    var brushColor = $("#color-field").val(); //get the current brush color (from the .brush div)
    $(".brush").css('background', brushColor); //set the brush to the new value
    addToColorSwatch(brushColor); //add that color to the color swatch
  }

  //color swatch handler ( not jquery methods :/ )
  function addToColorSwatch(color) {
    if(colorSwatch.length >= 3) { //if there are already 3 colors in the swatch
      $(".color-swatch").children().eq(0).remove(); //remove the first one
      colorSwatch.pop(); //remove the last one on the array (first one in the UI)
    }
    colorSwatch.unshift(color); //add a new color to the beginning of the array
    $(".color-swatch").append(`<div class="swatch-square ${color}"></div>`); //append the new color swatch square to the dom
    $(`.${color}`).css("background", color); //set the background of the newest square to the color parameter
  }

  $(".color-swatch").delegate("div", "click", function(){ //add event delegation to color swatch
    $(".brush").css("background", $(this).css('background')); //on clicking a swatch square, set the background of brush to swatch square color
  });

  //add click event listener to set color button
  $("#set-color").click(function(event) {
    event.preventDefault(); //prevent crazy clickers
    setBrushColor(); //set the color of the brush
  });

  //add submit event listener to text box
  $("#color-field").on("submit", setBrushColor);

  //create 8000 squares and append them to the body
  for(var i = 0; i <= 8000; i++){
    let html = `<div class="square"></div>`;
    $("body").append(html);
  }

  //add event delegation to body - listen for mouseovers on square
  $("body").delegate(".square", "mouseover", function(){
    $(this).css("background", $(".brush").css("background")); //set the background of the mouseover'd square to brush color
  });

});
