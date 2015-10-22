$(document).ready(function(){
  // Sets the color of the brush from the input feild
  $("#set-color").on("click", function(){
    event.preventDefault();
    var color = $("#color-field").val();
    $(".brush").css("background", color);
  });

  // $("#color-field").keydown(function(e){
  //   if (e.keyCode == 13){
  //     alert('I was pressed');
  //   }
  //   var color = $("#color-field").val();
  //   $(".brush").css("background", color);
  // });

  // Creates canvas of squares to paint on
  i =0;
  while (i < 8000){
    $(".controls").after("<div class='square'></div>");
    i++;
  }

  // Listens for mouseover and changes the color of square the mouse is over
  $(".square").each(function(index){
    $(this).on("mouseover", function() {
      var brush = $(".brush").css("background-color");
      console.log(brush);
      $(this).css("background", brush);
    });
  });
});
