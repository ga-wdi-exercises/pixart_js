
function changeColor(color) {
  $(".brush").css("background-color",color)
}

$("#set-color")[0].addEventListener("click", function(event){
  event.preventDefault();
  var colorChoice = $("#color-field").val();
  changeColor(colorChoice)
});
