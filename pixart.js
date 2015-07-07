$("#set-color").on("click", setNewBackground);
$("#set-color").on("submit", setNewBackground);

function setNewBackground(){
    var newBackground = document.getElementById('color-field').value;
    event.preventDefault();
    $(".brush").css("background-color", newBackground);

}
