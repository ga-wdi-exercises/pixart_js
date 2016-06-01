var userColor;

function addOn() {
    for (i=0; i<8000; i++) {
        $("body").append("<div class='square'></div>");
    }
    $(".square").on("mouseover", function(){
        $(this).css("background-color", userColor);
    });
}

$("#set-color").on("click", function(){
    userColor = $('#color-field').val();
    $(".brush").css("background-color",userColor);
    event.preventDefault();
    addOn();

});
