
$(document).ready(function(){
  //don't reload the page
  event.preventDefault();

  //What color do you want
  var userColor;
  var userColorChoose = function(){
    userColor = $("#color-field").val();
    event.preventDefault();
  };
  //put this color in the box
  var getColor = function(varX){
    userColor = $("#color-field").val();
    $(varX).css("background", userColor);
    event.preventDefault();
  };
  //get the color on button click
  $("button").on("click", function(){
    userColorChoose();
    getColor(".brush");
  });
  //create 20 divs
  for(i=0; i<8000; i++){
      $("body").append("<div class=\"square\"></div>");
      // $("div:eq(2)").attr("id",i);
      // $("#"+i).on("click", getColor("#"+i));
  }



$(".square").on("mouseover", function(){
  $(this).css("background", userColor);

});

});
