var userColor;

$("#set-color").on("click", function(){
    userColor = $('#color-field').val();
    event.preventDefault();
});
