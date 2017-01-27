$(document).ready(function() {
  var colorSwatch = [];
  var color = '';

  //set brush color helper function
  function setBrushColor() {
    var brushColor = $("#color-field").val(); //get the current brush color (from the .brush div)
    $(".brush").css('background', brushColor); //set the brush to the new value
    addToColorSwatch(brushColor); //add that color to the color swatch
  }

  //color swatch handler ( not jquery methods :/ )
  function addToColorSwatch(color) {
    if(colorSwatch.length >= 3) {
      $(".color-swatch").children().eq(0).remove();
      colorSwatch.pop();
    }
    colorSwatch.unshift(color);
    console.log(colorSwatch);

    $(".color-swatch").append(`<div class="swatch-square ${color}"></div>`);
    $(`.${color}`).css("background", color);
  }

  $(".color-swatch").delegate("div", "click", function(){
    $(".brush").css("background", $(this).css('background'));
  });

  //add click event listner to set color button
  $("#set-color").click(function(event) {
    event.preventDefault();
    setBrushColor();
  });

  //add submit event listener to text box
  $("#color-field").on("submit", setBrushColor);

  for(var i = 0; i <= 8000; i++){
    let html = `<div class="square"></div>`;
    $("body").append(html);
  }

  $("body").delegate(".square", "mouseover", function(){
    $(this).css("background", $(".brush").css("background"));
  });

});
