$(document).ready(function(){
  $("#set-color").on("click", function(e){
    e.preventDefault();
    console.log("test!");
    $(".brush").css("background-color", $("#color-field").val());
  });
    for(var i = 0; i < 8000; i++){
      $("body").append("<div class = 'square'></div>");
    }
    $(".square").on("mouseover", function(){
      $(this).css("background-color", $("#color-field").val());
    });
});
