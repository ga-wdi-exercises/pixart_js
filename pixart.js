$("#set-color").on("click", function(){
    var newBackground = document.getElementById('color-field').value;
//    console.log(newBackground);
    event.preventDefault();
    $(".brush").css("background-color", newBackground);

});
