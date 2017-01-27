var userColor;
var counter = 0;

$("#set-color").on("click", function(){
    userColor = $('#color-field').val();
    $(".brush").css("background-color",userColor);
    event.preventDefault();
});

for (i=0; i<8000; i++) {
    $("body").append("<div class='square'></div>");
}

$(".square").on("mouseover", function(){
    $(this).css("background-color", userColor);
});
