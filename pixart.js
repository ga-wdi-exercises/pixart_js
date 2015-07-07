$(document).ready(function(){
    $("#set-color").click(function(){
      event.preventDefault();
    $(".brush").css("background-color", $("#color-field").val());
    });
});

for(i=0;i<8000; i++){
  $("body").append("<div class='square'></div>");
}

$(".square").mouseover("click", function(){
   $(this).css("background-color",$("#color-field").val());
  })
