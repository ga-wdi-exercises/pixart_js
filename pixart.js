var userColor;

function addOn() {
    for (i=0; i<20; i++) {
        $("body").append("<div class='square'></div>");
    }
}

$("#set-color").on("click", function(){
    userColor = $('#color-field').val();
    addOn();
    event.preventDefault();
});

$("#color-field").on("keydown", function(event){
    if(event.keyCode == 13){
        $("#iset-color").click();
    }
});
