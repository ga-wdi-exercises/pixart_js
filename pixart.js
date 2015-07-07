$("#set-color").on("click", setNewBackground).on("submit", setNewBackground);

function setNewBackground(){
    var newBackground = document.getElementById('color-field').value;
    event.preventDefault();
    $(".brush").css("background-color", newBackground);

}

function addNewDivs() {
$('body').append('<div></div>');
$('body div').last().attr("class", "square");
}

for (var i=1;i<21;i++)
{
  addNewDivs(i);
}
