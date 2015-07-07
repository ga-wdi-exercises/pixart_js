$(document).ready(function(){
    $("#set-color").click(function(){
      event.preventDefault();

    $(".brush").css("background-color", $("#color-field").val());

//$("body").append(" <div class='square'> -- </div>.<br>");

for(i=0;i<20; i++){
    $("body").append("<div>_</div>");
}
//$("p").append(" <b>Appended text</b>.");
    });
});
