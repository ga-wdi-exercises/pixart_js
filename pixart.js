var userColor;

$("#set-color").on("click", function(){
    userColor = $('#color-field').val();
    event.preventDefault();
});

$("#color-field").on("keydown", function(event){
    if(event.keyCode == 13){
        $("#iset-color").click();
    }
});
