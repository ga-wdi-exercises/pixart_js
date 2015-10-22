$(document).ready(function(){
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
  i =0;
  while (i < 20){
    $(".controls").after("<div class='square'></div>");
    i++;
  }
});
