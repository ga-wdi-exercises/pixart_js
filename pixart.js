$(document).ready(function() {



  // set the swatch color to the value of input
  $("#set-color").on("click", function(){
    event.preventDefault();
    // set a variable equal to the input value
    var input = $("#color-field").val();
    // set swatch to input
    $("div.brush").css("background",input);
  });

  // create 20 divs of the "square" class and append to body
  for (var i = 0; i<16000; i++) {
    var div = document.createElement("div");
    $("body").append(div);
    $(div).attr("class","square");
}

  // on "square" clicks, change the color of div to input value
  $("div.square").on("mouseover", function (){
    var input = $("#color-field").val();
    $(this).css("background", input);
  });


});
