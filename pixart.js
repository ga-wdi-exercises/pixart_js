$(document).on("ready", function(){
  // console.log("jquery");
  var field = $("#color-field")
  var button = $("#set-color");
  var brushBox = $(".brush");
  var swatches = ["#1b4370"];
  var Board = $("div.controls");

  for (i = 0; i < 3; i++) {
  Board.append('<div class="swatch" id="swatch'+ i.toString() +'"></div>');
  }

  button.on("click", setColor);
  $("#form").on("submit", setColor);
  $(".swatch").on("click", setColorFromSwatch);

  function setColor(e){
    e.preventDefault();
    // console.log("clicked");
    brushBox.css("background", field.val());
    if (swatches.length < 3){
      swatches.unshift(field.val());
    }
    else {
      swatches[2] = swatches[1];
      swatches[1] = swatches[0];
      swatches[0] = field.val();
    }
    console.log(swatches);
    $("#swatch0").css("background", swatches[0]);
    $("#swatch1").css("background", swatches[1]);
    $("#swatch2").css("background", swatches[2]);
  }

  function setColorFromSwatch(e){
    e.preventDefault();
    // console.log("clicked");
    brushBox.css("background", $(this).css("background"));
    
    console.log(swatches);
    $("#swatch0").css("background", swatches[0]);
    $("#swatch1").css("background", swatches[1]);
    $("#swatch2").css("background", swatches[2]);
  }

  var divHtml = '<div class="square"></div>';
  for (var i = 0; i < 8000; i++) {
    $("body").append(divHtml);
  }

  var divs = $("div.square");
  divs.on("mouseover", setToBrush);

  function setToBrush(){
    $(this).css("background", brushBox.css("background"));
  }

});
