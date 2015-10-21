$(document).ready(function(){


  $("#set-color").on("click", function(){
    event.preventDefault();
    $(".brush").css("background", $("input").val());
  });

  $("#set-color").keydown(function(event){
    if (event.keyCode === 13); {
      event.preventDefault();
    $(".brush").css("background", $("input").val());
    }
  });

  for (i = 0; i < 20; i++) {
    $("<div></div>").attr("class", "square").appendTo($("body"));
}
$(".square").on("click", function(){
  $(this).css("background", $("input").val());
});

    // $(".square"+[i]).css({
    //   "width": "30px",
    //   "height": "30px",
    //   "margin": "0",
    //   "float": "left"
    // });
    // $(".square"+[i]).on("click", function(){
    //   $(".square"+[i]).css({
    //     "background": "green",
    //   });
    // });







});
