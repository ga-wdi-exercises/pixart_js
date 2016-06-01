var userColor;

function addOn() {
    for (i=0; i<20; i++) {
        $("body").append("<div class='square'></div>");
        $(".square").on("click", function() {
            $(this).css("background-color", "green");
        });
    }
}

$("#set-color").on("click", function(){
    userColor = $('#color-field').val();
    addOn();
    event.preventDefault();
});

$("#color-field").on("keydown", function(event){
    if(event.keyCode == 13){
        $("#set-color").click();
    }
});
